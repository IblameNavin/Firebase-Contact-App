// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Firebase configuration from Vite environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Log for debugging (remove in production)
console.log('Firebase Config:', {
  hasApiKey: !!import.meta.env.VITE_FIREBASE_API_KEY,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  envMode: import.meta.env.MODE
});

// Initialize Firebase
let app, analytics, db;

try {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  db = getFirestore(app);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
  
  // Fallback for development if env vars are missing
  if (import.meta.env.DEV) {
    console.warn('⚠️ Using fallback config for development');
    const fallbackConfig = {
      apiKey: "demo-key-for-dev",
      authDomain: "demo.firebaseapp.com",
      projectId: "demo-project",
      storageBucket: "demo.appspot.com",
      messagingSenderId: "123456789",
      appId: "1:123456789:web:abcdef",
      measurementId: "G-XXXXXX"
    };
    app = initializeApp(fallbackConfig, 'FallbackApp');
    db = getFirestore(app);
  }
}

export { app, analytics, db };