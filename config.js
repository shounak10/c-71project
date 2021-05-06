  import firebase from 'firebase'
  require("@firebase/firestore")


  
  
  
  var firebaseConfig = {
    apiKey: "AIzaSyBPdCDoknikD1NGo_rSWRpM00xZaTM9cKs",
    authDomain: "c71project-8afe9.firebaseapp.com",
    projectId: "c71project-8afe9",
    storageBucket: "c71project-8afe9.appspot.com",
    messagingSenderId: "637419598779",
    appId: "1:637419598779:web:ddc4d84fbb43839a24ca9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore()
  