import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../models/Post.model';
import {Subscription} from 'rxjs/Subscription';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';
import {viewClassName} from '@angular/compiler';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {


  @Input() postName :string;
  @Input() Status : string;
  @Input() Post : string;
  @Input() Title : string;
  @Input() Number : number;

  posts : Post[];
  postsSubscription : Subscription;

  update = new Promise(
    (resolve, reject)=>{
      const date = new Date();
      setTimeout(
        ()=>{
          resolve(date);
        },500
      );
    }
  )

  constructor(private postsService : PostsService, private router : Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onNewPost(){
    this.router.navigate(['/posts', 'new'])
  }

  onDeletePost(post : Post){
    this.postsService.removePost(post);
  }

  onViewPost(id : number){
    this.router.navigate(['/posts', 'view', id]);
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
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
