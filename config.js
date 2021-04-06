import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDHDNvjWaourdWY0Y-AGEXVTuhpReS8Zas",
    authDomain: "story-hub-4e57d.firebaseapp.com",
    databaseURL: "https://story-hub-4e57d-default-rtdb.firebaseio.com",
    projectId: "story-hub-4e57d",
    storageBucket: "story-hub-4e57d.appspot.com",
    messagingSenderId: "477538219266",
    appId: "1:477538219266:web:001bb93a18d9b3ac937e1b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();