import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seed file

const config = {
    apiKey: "AIzaSyAtnF2JhalLvlB6XP4Ms2SEXH2xh6RADdU",
    authDomain: "instagram-clone-10ecb.firebaseapp.com",
    projectId: "instagram-clone-10ecb",
    storageBucket: "instagram-clone-10ecb.appspot.com",
    messagingSenderId: "997566616149",
    appId: "1:997566616149:web:185671b3712177a7723adc",
    measurementId: "G-E6YH2LYBLM"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seed the firestore

export { firebase, FieldValue };