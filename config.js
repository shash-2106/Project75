import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB7oJ8B7p6FMbvQPi4xtAWZzgqlGtBwp4I",
  authDomain: "story-hub-2-62c80.firebaseapp.com",
  projectId: "story-hub-2-62c80",
  storageBucket: "story-hub-2-62c80.appspot.com",
  messagingSenderId: "800141412609",
  appId: "1:800141412609:web:9251530be8828608c6f300"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();