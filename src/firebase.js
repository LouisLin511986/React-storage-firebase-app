import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAxz04z-v-u3B4EWzmzcCItreo2WkGYhR8",
    authDomain: "storage-firebase-app-a3e53.firebaseapp.com",
    projectId: "storage-firebase-app-a3e53",
    storageBucket: "storage-firebase-app-a3e53.appspot.com",
    messagingSenderId: "541378025253",
    appId: "1:541378025253:web:1ae798a8ab4414f4f1eccc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, storage, db }