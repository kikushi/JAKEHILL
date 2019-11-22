import { Component } from '@angular/core';
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rf-app';
  constructor(){
    var config={
    apiKey: "AIzaSyCtUQQHIjMn5juK1WmeSNjmZp2ktnAG56Y",
    authDomain: "webrfx.firebaseapp.com",
    databaseURL: "https://webrfx.firebaseio.com",
    projectId: "webrfx",
    storageBucket: "webrfx.appspot.com",
    messagingSenderId: "134324312398",
    appId: "1:134324312398:web:36b19c7ea290f3df74a61f",
    measurementId: "G-8FXHKJC7ZK"
    };
    firebase.initializeApp(config);
  }
}
