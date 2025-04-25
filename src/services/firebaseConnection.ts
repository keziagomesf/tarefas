
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCcsQWb6QQL81FkicoH5VTl6SE5Y7APvFw",
  authDomain: "tarefasplus-9c1e2.firebaseapp.com",
  projectId: "tarefasplus-9c1e2",
  storageBucket: "tarefasplus-9c1e2.firebasestorage.app",
  messagingSenderId: "15066698346",
  appId: "1:15066698346:web:5b934d101978033a76f013",
  measurementId: "G-MYT8VL8X3Q"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export {db};