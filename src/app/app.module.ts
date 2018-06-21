import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { PostComponent} from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PostListComponent } from './post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {PostsService} from './services/posts.service';
import {SinglePostComponent} from './post-list/single-post/single-post.component';
import {PostFormComponent} from './post-list/post-form/post-form.component';

const appRoutes: Routes = [
  { path : 'auth/signup', component: SignupComponent},
  { path : 'auth/signin', component : SigninComponent},
  { path : 'posts', canActivate : [AuthGuardService], component : PostListComponent},
  { path : 'posts/new' , canActivate : [AuthGuardService], component : PostFormComponent},
  { path : 'posts/view/:id' , canActivate : [AuthGuardService], component : SinglePostComponent},
  { path : '' , redirectTo: 'posts', pathMatch: 'full'},
  { path: '**', redirectTo : 'posts'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SignupComponent,
    SigninComponent,
    PostListComponent,
    SinglePostComponent,
    PostFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    PostsService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
