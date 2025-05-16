// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Google sign in authentication library
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//Firestone database library
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  snapshotEqual,
} from "firebase/firestore";

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

//Declare the google windows to choose the Google account for authenticate
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

//Sign in with Google popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//Sign in with redirect
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//Added user that authenticated in to the firestore database user the users list
//Create database object
export const db = getFirestore();

//Function to added authenticated user to users collection
export const createUserDocumentFromAuth = async (userAuth) => {
  //userAuth object attribute
  // displayName: "Le Minh Nhat Dang"
  // email: "lmndang.toronto@gmail.com"
  // uid: "BxbFrxVl9aN3Lyju8tEVRvi2h6d2"

  //Create the references of users collection in the Data base following the unique user ID
  const userDocRef = doc(db, "users", userAuth.uid);

  //The snapshot is getting the collection of user in the database
  const userSnapShot = await getDoc(userDocRef);

  //If the user data doesn't exist
  //Create / set the document with the data from userAuth in my collection
  if (!userSnapShot.exists()) {
    //Destructured object - get display name and email address from authenticated user from Google login popup
    const { displayName, email } = userAuth;

    const createAt = new Date();

    //Try to add user to data base, catch the error if it failed
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //Check if the user data exists

  return userDocRef;
};
