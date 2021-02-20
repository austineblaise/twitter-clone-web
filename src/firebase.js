import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfl02Qywl0z_20GCVr4mvEW99tg9K3u9A",
  authDomain: "twitter-clone-twitter.firebaseapp.com",
  projectId: "twitter-clone-twitter",
  storageBucket: "twitter-clone-twitter.appspot.com",
  messagingSenderId: "456335671743",
  appId: "1:456335671743:web:2a975f5c190b522fc2610a",
  measurementId: "G-86CTZWG24G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
