import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBnfT1pUVCmA1UtePwaaqFF9mLyqQU_nLg",
  authDomain: "ecom-2.firebaseapp.com",
  databaseURL: "https://ecom-2.firebaseio.com",
  projectId: "ecom-2",
  storageBucket: "ecom-2.appspot.com",
  messagingSenderId: "1071920368560",
  appId: "1:1071920368560:web:e874ec0ded51a79372a475",
  measurementId: "G-P2XDJ06LY9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists)
    userRef.set({
      displayName: userAuth.displayName,
      email: userAuth.email,
      createdAt: new Date(),
      ...additionalData,
    });

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
