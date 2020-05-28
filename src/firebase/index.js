import firebase from "firebase";
require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAUsiOd2UvKBx2C87SbXEm0HwMGYqoeDPg",
  authDomain: "vue-ecommerce-d0ac8.firebaseapp.com",
  databaseURL: "https://vue-ecommerce-d0ac8.firebaseio.com",
  projectId: "vue-ecommerce-d0ac8",
  storageBucket: "vue-ecommerce-d0ac8.appspot.com",
  messagingSenderId: "1065872890316",
  appId: "1:1065872890316:web:fcf0f55ce92b8ec41aa569",
  measurementId: "G-Q5CR95EFLQ"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

// Initialize Database Firestore
const db = firebase.firestore();

export { fb, db }