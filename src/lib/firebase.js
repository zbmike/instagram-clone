import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seed file

const config = {};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// see the firestore

export { firebase, FieldValue };