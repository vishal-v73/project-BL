import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGwb2PR3bmcuweU0Ls_yz5c2y3KuURzU8",
  authDomain: "bloodline-11394.firebaseapp.com",
  projectId: "bloodline-11394",
  storageBucket: "bloodline-11394.firebasestorage.app",
  messagingSenderId: "172549974",
  appId: "1:172549974:web:f37072750cb56da124d8f7",
  measurementId: "G-07GYERZLC1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);