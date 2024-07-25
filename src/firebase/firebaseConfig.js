// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//! yetkilendirme icin
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7LiFBbNxkkxzGFsHwACcb-pp2BDE-iM0",
  authDomain: "hs-chat-97822.firebaseapp.com",
  projectId: "hs-chat-97822",
  storageBucket: "hs-chat-97822.appspot.com",
  messagingSenderId: "891879106989",
  appId: "1:891879106989:web:c9adf15cc43092efb49924",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! yekilendirme icin

export const auth = getAuth (app);

//! googlesaglayici 

export const provider = new GoogleAuthProvider()


//!veritabani kurulum

export const db = getFirestore(app)