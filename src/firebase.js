// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const API_KEY= process.env.FIREBASE_API_KEY;
const APPID= process.env.APPID;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:API_KEY,
  authDomain: "react-f060f.firebaseapp.com",
  projectId: "react-f060f",
  storageBucket: "react-f060f.appspot.com",
  messagingSenderId: "609018218744",
  appId: APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);