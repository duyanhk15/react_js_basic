import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyCxvg92uMuP8Pfm3a5FvQbeMbtXv4McJkY",
  authDomain: "notereact-a0481.firebaseapp.com",
  databaseURL: "https://notereact-a0481.firebaseio.com",
  projectId: "notereact-a0481",
  storageBucket: "notereact-a0481.appspot.com",
  messagingSenderId: "88636945076"
};
firebase.initializeApp(config);

  export const noteData = firebase.database().ref('dataForNote');
