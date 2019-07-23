import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCfA06aZM0kHDrLeT4LNCGytKBPVZzjO1M',
  authDomain: 'revents-19a46.firebaseapp.com',
  databaseURL: 'https://revents-19a46.firebaseio.com',
  projectId: 'revents-19a46',
  storageBucket: '',
  messagingSenderId: '1022639889138',
  appId: '1:1022639889138:web:21de8642b49b0aef'
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;