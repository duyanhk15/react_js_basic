import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {firebaseConnect} from './firebaseConnect';
import * as firebase from 'firebase'

class App extends Component {

  pushData = () =>{
    var dataConnect = firebase.database().ref('dataForNote');
    dataConnect.push({
      id:4,
      titleNote: 'Note số 4',
      contentNote: 'Nội dung note số 4'
    })
  }

  removeData = () => {
    var dataConnect = firebase.database().ref('dataForNote');
    dataConnect.child('-LRUg6iWvyj8e1tQEgh9').remove();
  }

  render() {
    console.log(firebaseConnect);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <button onClick={()=>this.pushData()}>Push database into Firebase</button>
        <button onClick={()=>this.removeData()}>Remove database from Firebase</button>
      </div>
    );
  }
}

export default App;
