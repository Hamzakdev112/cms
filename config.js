const firebase = require('firebase')


const firebaseConfig = {
    apiKey: "AIzaSyC3tm--EVliZslvrSr3S6YvUirR8fv5Qzw",
    authDomain: "react-cms-dbae4.firebaseapp.com",
    projectId: "react-cms-dbae4",
    storageBucket: "react-cms-dbae4.appspot.com",
    messagingSenderId: "358953033525",
    appId: "1:358953033525:web:0f9dbf665b6fe9f9c7b67c",
    measurementId: "G-7BRFHNLNWF"
  };


  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()