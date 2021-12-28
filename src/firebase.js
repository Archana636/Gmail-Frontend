// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACf1DsgFtPE-iSSHCZMYGpcBejtrYbO1g",
  authDomain: "mail-archu.firebaseapp.com",
  projectId: "mail-archu",
  storageBucket: "mail-archu.appspot.com",
  messagingSenderId: "406079509016",
  appId: "1:406079509016:web:8939619f25a9d72ba3696d",
  measurementId: "G-KFB8XPNVSF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export { auth, provider };
export default db;
