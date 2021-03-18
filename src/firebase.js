import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvUsoiedYr87U9NrlNDrJNUl5EFeFEWvg",
  authDomain: "todo-app-13b95.firebaseapp.com",
  projectId: "todo-app-13b95",
  storageBucket: "todo-app-13b95.appspot.com",
  messagingSenderId: "10650319690",
  appId: "1:10650319690:web:4b0a9bafafc6a5b87d1fb3",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
