import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF9zMc4ihcACE7C_elhWtq4Dd1c7X89uQ",
  authDomain: "todo-reactnative-e60ed.firebaseapp.com",
  projectId: "todo-reactnative-e60ed",
  storageBucket: "todo-reactnative-e60ed.appspot.com",
  messagingSenderId: "877732846656",
  appId: "1:877732846656:web:f3223d76f8452b2f16d3a5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
