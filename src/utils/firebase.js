import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { firebaseLooper } from "./tools";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn-I-MF8qsRut_3NGlCnpAO4QabMACQA8",
  authDomain: "practise-5ba6d.firebaseapp.com",
  databaseURL: "https://practise-5ba6d-default-rtdb.firebaseio.com",
  projectId: "practise-5ba6d",
  storageBucket: "practise-5ba6d.appspot.com",
  messagingSenderId: "815327323204",
  appId: "1:815327323204:web:cace9a898c095de1360811",
  measurementId: "G-6ZH37L9ZMG",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore DB
const db = firebase.firestore();
export const firebaseTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const carsCollection = db.collection("cars");
// db.collection("cars").delete();

export default firebase;
