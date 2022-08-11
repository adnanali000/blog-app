import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore';

// require('dotenv').config();



const firebaseConfig = {
  apiKey: "AIzaSyBKXFlO1O4qxJ22m-k4n1zaVYDz8juUYKk",
  authDomain: "blog-app-6ee36.firebaseapp.com",
  projectId: "blog-app-6ee36",
  storageBucket: "blog-app-6ee36.appspot.com",
  messagingSenderId: "350012134730",
  appId: "1:350012134730:web:01f525c1c42e0c6b4a9db3"
};

const app = firebase.initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);

export {fireDb,auth}