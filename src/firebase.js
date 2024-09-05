//import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDnz-AGP7RtkZ90yMtKX5BqsaKI8XKuFyI",
  authDomain: "netflix-project-f4754.firebaseapp.com",
  projectId: "netflix-project-f4754",
  storageBucket: "netflix-project-f4754.appspot.com",
  messagingSenderId: "755576120832",
  appId: "1:755576120832:web:7ed6d989f803240246dae5"
};
  const app = initializeApp(firebaseConfig);
  //const db = app.firestore();
  const auth=getAuth(app);
  //const auth=firebase.auth();
   export { auth };
   //export default db;