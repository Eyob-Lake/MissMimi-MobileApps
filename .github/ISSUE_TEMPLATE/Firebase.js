import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAeKhGG-1RwYMpPgA1RkUYllP3UXHzECKM",
    authDomain: "missmimi-mobileapps-1ec09.firebaseapp.com",
    projectId: "missmimi-mobileapps-1ec09",
    storageBucket: "missmimi-mobileapps-1ec09.appspot.com",
    messagingSenderId: "31747189796",
    appId: "1:31747189796:web:21b4b2d8ef59acfe6dfcb1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Use the `db` object to perform Firestore operations

export { db };
