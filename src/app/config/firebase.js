import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import secret from '../secret';

const firebaseConfig = {
  apiKey: secret.apiKey,
  authDomain: secret.authDomain,
  databaseURL: 'https://revents-19a46.firebaseio.com',
  projectId: 'revents-19a46',
  storageBucket: 'revents-19a46.appspot.com',
  messagingSenderId: secret.messagingSenderId,
  appId: secret.appId
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
