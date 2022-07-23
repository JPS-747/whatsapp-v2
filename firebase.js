import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYjp1SWScg2Y7o8yr754L52LUbK-2vqd0",
  authDomain: "whatsapp-2-e7c21.firebaseapp.com",
  projectId: "whatsapp-2-e7c21",
  storageBucket: "whatsapp-2-e7c21.appspot.com",
  messagingSenderId: "72244929559",
  appId: "1:72244929559:web:402c1463d88c5dfb0c2852",
};

const app = !firebase.apps.lenght
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
