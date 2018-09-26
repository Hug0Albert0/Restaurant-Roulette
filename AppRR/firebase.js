import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCpOyW-9R47QSNuuHdVxjprQJXiDVYYUqo",
    authDomain: "roulette-972b4.firebaseapp.com",
    databaseURL: "https://roulette-972b4.firebaseio.com",
    projectId: "roulette-972b4",
    storageBucket: "roulette-972b4.appspot.com",
    messagingSenderId: "179984458740"
  };

firebase.initializeApp(config);
const dbRef=firebase.database().ref();
export default dbRef;
