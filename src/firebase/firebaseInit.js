import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaO3wRbPWNNX5jbf6qwZF_9Uk11cEiwxY",
    authDomain: "fireblogs-1b59f.firebaseapp.com",
    projectId: "fireblogs-1b59f",
    storageBucket: "fireblogs-1b59f.appspot.com",
    messagingSenderId: "197041115696",
    appId: "1:197041115696:web:c085d63f68ad3293c6d3f5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();