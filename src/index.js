import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase';

import App from './App';

const configApp = {
    apiKey: "AIzaSyBGUaklHYKgX94ww2NUJ4DMivOcWxwy7Ig",
    authDomain: "denglish-fd22f.firebaseapp.com",
    databaseURL: "https://denglish-fd22f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "denglish-fd22f",
    storageBucket: "denglish-fd22f.appspot.com",
    messagingSenderId: "865860636012",
    appId: "1:865860636012:web:7b2083bd6a68c53bfa7749"
}

firebase.initializeApp(configApp);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

