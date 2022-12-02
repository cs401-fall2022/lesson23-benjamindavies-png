let firebaseConfig = {
    apiKey: "AIzaSyAEvHfTKkbOQwCxY3DUebsNFyUGpNOCgMg",
    authDomain: "blogsite-5358c.firebaseapp.com",
    projectId: "blogsite-5358c",
    storageBucket: "blogsite-5358c.appspot.com",
    messagingSenderId: "322951558941",
    appId: "1:322951558941:web:a4771f0717a30b5da993f4",
    measurementId: "G-NXML1D6ZB2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();