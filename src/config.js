import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCaIgc4l9HzTr0Tnad2KKoOuEhx8JwIwmk",
    authDomain: "wecode-45c42.firebaseapp.com",
    databaseURL: "https://wecode-45c42.firebaseio.com",
    projectId: "wecode-45c42",
    storageBucket: "",
    messagingSenderId: "253212590776"
};

var fire = firebase.initializeApp(config);

export default fire;