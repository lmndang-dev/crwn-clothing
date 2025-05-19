// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Google sign in authentication library
//This library will help to sign in with Google account
//This library will help to sign in with email and password
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//Firestore database library
//This library will help to interact with the firestore database
//This library will help to add, update, delete and get data from the firestore database
//This library will help to create a collection and document in the firestore database
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
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

//Initialize the firebase app with the firebaseConfig object
//This will create a new firebase app instance
initializeApp(firebaseConfig);

//Declare the google windows to choose the Google account for authenticate
const googleProvider = new GoogleAuthProvider();

//Set the Google provider to only allow the user to select the account
// that is already logged in to the Google account
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//Export the auth object to use in other components
//Get the authentication object from firebase app
//This object will be used to sign in the user with Google  or email and password
export const auth = getAuth();

//Sign in with Google popup
//This function will open a popup window to sign in with Google
//This function will return the user object that is authenticated with Google
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

/*============= Added user that authenticated in to the firestore database user the users list =============*/
//Create database object
//Get the firestore object from firebase app
//This object will be used to interact with the firestore database
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //Create a reference to the collection in the database
  const collectionRef = collection(db, collectionKey);

  //Create a batch object to perform multiple write operations
  const batch = writeBatch(db);

  //Loop through the objects to add and set each document in the collection
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  //Commit the batch write operation
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  //Create a reference to the collection in the database
  const collectionRef = collection(db, "categories");

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

//Function to added authenticated user to users collection
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //Check if the user data exists

  return userDocRef;
};
/*============= Added user that authenticated in to the firestore database user the users list =============*/

//This function will create a new user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  //Return the user object that created from the email and password
  return await createUserWithEmailAndPassword(auth, email, password);
};

//This function will sign in the user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  //Check if the email and password are not empty
  //If the email and password are empty, return
  if (!email || !password) return;

  //Return the user object that created from the email and password
  return await signInWithEmailAndPassword(auth, email, password);
};

//This function will sign out the user from the firebase authentication
export const signOutUser = async () => await signOut(auth);

//This function will check if the user is authenticated or not
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
