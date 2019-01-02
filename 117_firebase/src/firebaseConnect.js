import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCxvg92uMuP8Pfm3a5FvQbeMbtXv4McJkY",
    authDomain: "notereact-a0481.firebaseapp.com",
    databaseURL: "https://notereact-a0481.firebaseio.com",
    projectId: "notereact-a0481",
    storageBucket: "notereact-a0481.appspot.com",
    messagingSenderId: "88636945076"
  };
  export const firebaseConnect = firebase.initializeApp(config);


  var data = firebase.database().ref('dataForNote/');
  data.once('value').then(function(snapshot){
      console.log(snapshot.val());
  })

  var editData2 = firebase.database().ref('dataForNote/note 2');
 editData2.set({
     id: 2,
     titleNote: "Note số 2",
     contentNote: 'Nội dung note số 2 đã sửa' 
 })