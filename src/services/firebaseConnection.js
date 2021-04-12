import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyB3Z04X5pu8q0jMwRyFZeLxzGwDscMAMoc",
    authDomain: "worklineappi.firebaseapp.com",
    databaseURL: "https://worklineappi-default-rtdb.firebaseio.com",
    projectId: "worklineappi",
    storageBucket: "worklineappi.appspot.com",
    messagingSenderId: "392112580526",
    appId: "1:392112580526:web:0bf2444f4f906c9d4b0a3f",
    measurementId: "G-W454E7DQN6"
  };

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;