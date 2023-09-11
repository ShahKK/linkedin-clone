import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBjPiI10x3NIRqvuOqR_XnTS1Re9_0p098",
    authDomain: "linkedin-clone-38aa1.firebaseapp.com",
    projectId: "linkedin-clone-38aa1",
    storageBucket: "linkedin-clone-38aa1.appspot.com",
    messagingSenderId: "358538738132",
    appId: "1:358538738132:web:ad014ea8d0dc3fb0ccfe41",
    measurementId: "G-HJNBW96XC9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth };