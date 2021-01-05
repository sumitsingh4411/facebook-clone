import firebase from "firebase";
const firebaseConfig = {
        apiKey: "AIzaSyA5di9nwavvvdCLArdQx6fo1Oq8OiyzbJY",
        authDomain: "facebook-f724c.firebaseapp.com",
        projectId: "facebook-f724c",
        storageBucket: "facebook-f724c.appspot.com",
        messagingSenderId: "704013200493",
        appId: "1:704013200493:web:39f82ba71db02f115f6364"
  };
  const fire=firebase.initializeApp(firebaseConfig);
  const db=fire.firestore();
  const auth=fire.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;
