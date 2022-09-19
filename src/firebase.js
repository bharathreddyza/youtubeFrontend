import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyC9_Zzq9WdVwm2Eoakcj9EKM_RWA7y_xYU',
  authDomain: "fir-a0e08.firebaseapp.com",
  projectId: "fir-a0e08",
  storageBucket: "fir-a0e08.appspot.com",
  messagingSenderId: "680306271438",
  appId: "1:680306271438:web:27137ba5ee3c5b2818dc9f",
  measurementId: "G-QDP7WJXF4V"};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
