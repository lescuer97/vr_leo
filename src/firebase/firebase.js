import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "testing-server-36c26.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: "testing-server-36c26",
  storageBucket: "testing-server-36c26.appspot.com",
  messagingSenderId: "187555352323",
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const db = firebase.firestore();

export default db;
