import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCDlHy4zEyWrQe6vkQpVI3KiDFZ40-0C0I',
  authDomain: 'mymoney-8cf14.firebaseapp.com',
  projectId: 'mymoney-8cf14',
  storageBucket: 'mymoney-8cf14.appspot.com',
  messagingSenderId: '1063033908911',
  appId: '1:1063033908911:web:aa4f9081857f5f30f66e5a',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

export { projectFirestore };
