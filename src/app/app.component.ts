/*import { Component } from '@angular/core';
import {reject} from 'q';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lastUpdate = new Promise(
    (resolve, reject)=>{
      const date = new Date();
      setTimeout(
        ()=>{
          resolve(date);
        },2000
      );
    }
  )

  isAuth = false;

  constructor(){
    var config = {
      apiKey: "AIzaSyCW3z8PmwR3s5ldMMw0A0kiWqY9Ix8Vr5Q",
      authDomain: "posts-db-id.firebaseapp.com",
      databaseURL: "https://posts-db-id.firebaseio.com",
      projectId: "posts-db-id",
      storageBucket: "",
      messagingSenderId: "102489069416"
    };
    firebase.initializeApp(config);
  }
  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };

  posts = [

    {
      title:'Mon premier post',
      post:'Angular cest la vie',
      number:0,
      //created_at: Date
    },
    {
      title:"Mon deuxième post",
      post:'Ja-ja-javaScript',
      number:0,
      //created_at: Date
    },
    {
      title:"Encore un post",
      post:"Bla bla bla",
      number:0,
      //created_at: Date
    }
  ];


  onAllumer(){
    console.log("MESSSAAAAAAAAAGGEEEE");
  }
}*/

import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lastUpdate = new Promise(
    (resolve, reject)=>{
      const date = new Date();
      setTimeout(
        ()=>{
          resolve(date);
        },2000
      );
    }
  )

  isAuth = false;
  constructor(){

    var config = {
      apiKey: "AIzaSyCW3z8PmwR3s5ldMMw0A0kiWqY9Ix8Vr5Q",
      authDomain: "posts-db-id.firebaseapp.com",
      databaseURL: "https://posts-db-id.firebaseio.com",
      projectId: "posts-db-id",
      storageBucket: "",
      messagingSenderId: "102489069416"
    };
    firebase.initializeApp(config);

  }

  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };

  posts = [

    {
      title:'Mon premier post',
      post:'Angular cest la vie',
      number:0,
      //created_at: Date
    },
    {
      title:"Mon deuxième post",
      post:'Ja-ja-javaScript',
      number:0,
      //created_at: Date
    },
    {
      title:"Encore un post",
      post:"Bla bla bla",
      number:0,
      //created_at: Date
    }
  ];


  onAllumer(){
    console.log("MESSSAAAAAAAAAGGEEEE");
  }
}

