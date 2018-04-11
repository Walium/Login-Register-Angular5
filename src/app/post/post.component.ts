import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() appareilName :string;
  @Input() Status : string;
  @Input() Post : string;
  @Input() Title : string;
  @Input() Number : number;

  update = new Promise(
    (resolve, reject)=>{
      const date = new Date(2001, 3, 15);;
      setTimeout(
        ()=>{
          resolve(date);
        },500
      );
    }
  )

  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    return this.Status;
  }

  getPost(){
    return this.Post;
  }

  getColor(){
    if(this.Status=== 'éteint')
      return 'red';
    else if(this.Status=== 'allumer')
      return 'green';
  }

  like() {
    //this.Status='on';
    this.Number++;
    if(this.Number>0)
      this.Status='on';
    else if(this.Number===0)
      this.Status='neutre';
    return this.Status;
  }

  unlike() {
    //this.Status='off';
    this.Number--;
    if(this.Number<0)
      this.Status='off';
    else if(this.Number===0)
      this.Status='neutre';
    return this.Status;
  }
}
