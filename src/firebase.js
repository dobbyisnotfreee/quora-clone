import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhablqSpIjomTos052oHU3pbSXHhIvWaU",
    authDomain: "quora-clone-c30f2.firebaseapp.com",
    projectId: "quora-clone-c30f2",
    storageBucket: "quora-clone-c30f2.appspot.com",
    messagingSenderId: "383659930078",
    appId: "1:383659930078:web:b19177f222913c555fad4f",
    measurementId: "G-6KW1PLCCQ3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

const db = firebaseApp.firestore()

export {auth, provider}

export default db