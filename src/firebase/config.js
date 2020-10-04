import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC8a7x-ulB_0i-AkqF6OCyLGHKdT3uYEZ4",
  authDomain: "enemy-firegram.firebaseapp.com",
  databaseURL: "https://enemy-firegram.firebaseio.com",
  projectId: "enemy-firegram",
  storageBucket: "enemy-firegram.appspot.com",
  messagingSenderId: "978122970330",
  appId: "1:978122970330:web:1fccc981b69c61623bc1e3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
