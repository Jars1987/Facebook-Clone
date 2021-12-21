import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'facebook-clone-c4b0c.firebaseapp.com',
  projectId: 'facebook-clone-c4b0c',
  storageBucket: 'facebook-clone-c4b0c.appspot.com',
  messagingSenderId: '411669791296',
  appId: '1:411669791296:web:5bef9574ac87d9f142d5a5',
};

let app;

if (app == null) {
  app = initializeApp(firebaseConfig);
} else {
  app = app();
}

const db = getFirestore();
const storage = getStorage();

export { db, storage };
