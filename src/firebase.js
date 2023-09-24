// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7GTUBSXEZKmGr3OkIUxi6cJmshpGEzys",
  authDomain: "foosball-app-c9b59.firebaseapp.com",
  projectId: "foosball-app-c9b59",
  storageBucket: "foosball-app-c9b59.appspot.com",
  messagingSenderId: "911806976470",
  appId: "1:911806976470:web:4bacbca3b8326471909477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const  db = getFirestore(app);

export default db;