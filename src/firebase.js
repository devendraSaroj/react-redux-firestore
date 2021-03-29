import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp7MSoh6qRAQTGke0jiRQSE7kvTzc_GL0",
  authDomain: "react-firestore-integration.firebaseapp.com",
  projectId: "react-firestore-integration",
  storageBucket: "react-firestore-integration.appspot.com",
  messagingSenderId: "922051383591",
  appId: "1:922051383591:web:058aae6a3b29d4c4901902",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
