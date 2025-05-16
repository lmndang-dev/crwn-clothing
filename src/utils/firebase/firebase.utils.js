// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration this code copied from firebase web-app setup
const firebaseConfig = {
  apiKey: "AIzaSyBIQ9Cjjt-CkUwm_Nf3zAqrJPDV96a3ENQ",
  authDomain: "crwn-clothing-db-5f683.firebaseapp.com",
  projectId: "crwn-clothing-db-5f683",
  storageBucket: "crwn-clothing-db-5f683.firebasestorage.app",
  messagingSenderId: "1097680397917",
  appId: "1:1097680397917:web:020643b01337a8c60a8fb4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Declare the google provider to customize
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
