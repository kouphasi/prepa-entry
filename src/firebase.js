// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
// import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4qzryWZuwgjo8oazGRk2OaG26FyFsIto",
  authDomain: "prepa-entry.firebaseapp.com",
  projectId: "prepa-entry",
  storageBucket: "prepa-entry.appspot.com",
  messagingSenderId: "219127957075",
  appId: "1:219127957075:web:ce4e4ca568d1f02e87e8a6",
  measurementId: "G-WWJT0ZFP1H",
};

firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
