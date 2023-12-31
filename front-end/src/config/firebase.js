import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBUHTSxFxTD0nKT4wjbuBxgaMJkHyXktwM',
  authDomain: 'residences-v1.firebaseapp.com',
  projectId: 'residences-v1',
  storageBucket: 'residences-v1.appspot.com',
  messagingSenderId: '364821859219',
  appId: '1:364821859219:web:c1ffb42afa6a5f4e5ab666',
  measurementId: 'G-TFMRD45461',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
