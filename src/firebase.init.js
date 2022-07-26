// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDItc_bsjQ1-Kjl1sePyB17sDRB8hJZvlA",
  authDomain: "food-village-6c8a6.firebaseapp.com",
  projectId: "food-village-6c8a6",
  storageBucket: "food-village-6c8a6.appspot.com",
  messagingSenderId: "821702813991",
  appId: "1:821702813991:web:b17fee34bb9ab3d5f76102"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 