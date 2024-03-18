// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import  { getFirestore} from 'firebase/firestore';
import {getAnalytics} from  "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKJEqLOAQQSUdpSHRePzWtH6uzQ2Z-JQM",
  authDomain: "chatter-app-5e4d2.firebaseapp.com",
  projectId: "chatter-app-5e4d2",
  storageBucket: "chatter-app-5e4d2.appspot.com",
  messagingSenderId: "529680670013",
  appId: "1:529680670013:web:a0a8f610aeee4e62b1b954",
  measurementId: "G-0Z2CYW74L3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
export const auth = getAuth(app);
getAnalytics(app);