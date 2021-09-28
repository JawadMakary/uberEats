// expo install firebase
// npm i tslib
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD400z6KBnPApTP2emy9FUYbtSUW4oomK8",
  authDomain: "ubereats-ab283.firebaseapp.com",
  projectId: "ubereats-ab283",
  storageBucket: "ubereats-ab283.appspot.com",
  messagingSenderId: "871668377920",
  appId: "1:871668377920:web:1e57bf72fe195bfaddb2a5",
};
// if no fb app -> initialize one else use existing one
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
