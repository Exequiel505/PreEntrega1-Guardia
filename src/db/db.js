// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKBqX_F7__YaUvaRfq-y-rZ_UwJalFjjQ",
  authDomain: "proyectofinalreact-guardia.firebaseapp.com",
  projectId: "proyectofinalreact-guardia",
  storageBucket: "proyectofinalreact-guardia.appspot.com",
  messagingSenderId: "176152800448",
  appId: "1:176152800448:web:b1435d335e83a5d4421125"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;