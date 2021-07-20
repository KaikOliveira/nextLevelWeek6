/* eslint-disable import/no-duplicates */
import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCrTagamAUuOaaHtN7ggej0ZvPYHXLBI9M',
  authDomain: 'letmeask-62385.firebaseapp.com',
  databaseURL: 'https://letmeask-62385-default-rtdb.firebaseio.com',
  projectId: 'letmeask-62385',
  storageBucket: 'letmeask-62385.appspot.com',
  messagingSenderId: '1046829043777',
  appId: '1:1046829043777:web:2e175c2784e7dc922df6c0',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
