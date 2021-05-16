import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvwRvwxN8JdLRNmRu_OAJ3XeLc1OOztOU",
  authDomain: "facebook-61289.firebaseapp.com",
  projectId: "facebook-61289",
  storageBucket: "facebook-61289.appspot.com",
  messagingSenderId: "245586726854",
  appId: "1:245586726854:web:93c9ab1908f8e30c0b2cc7",
  measurementId: "G-Q1TQ85DGK3",
};
/*
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}*/

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
