import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByZ0cDD3QUdYSEKfBsZAAyHI8U6yduVe4",
  authDomain: "client-form-mama-gus.firebaseapp.com",
  projectId: "client-form-mama-gus",
  storageBucket: "client-form-mama-gus.appspot.com",
  messagingSenderId: "277815166342",
  appId: "1:277815166342:web:8d9672bc42e417f9675807",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

// TODO this is the way to logout and check if user logged in
// auth.signOut();
