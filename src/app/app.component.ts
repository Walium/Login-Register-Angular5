import { Component } from '@angular/core';
import {reject} from 'q';

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

  constructor(){//qui s'execute des la creation de isAuth
    setTimeout(
      () => {
        this.isAuth = true;
      },4000
    );
  }
  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };

  appareils = [

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
