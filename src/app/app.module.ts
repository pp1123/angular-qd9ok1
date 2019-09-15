import { NgModule ,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildParentClass } from './child.component';
import { SignupFormComponent } from './sign-up.component';
import { newcoursearray } from './newcoursearray.component';
import { ChangePasswordComponent } from './changepassword.component';
import { posts } from './posts.component';
import  {PostsService} from './posts.service';
import   {AppErrorHandler} from './common/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,HttpModule,
  RouterModule.forRoot([
   {
       path:"",component:HomeComponent
   } ,
   {
     path:"followers/:username",component:GithubProfileComponent
   },
   {
     path:'followers',component:GithubFollowersComponent
   },
   {
     path:'posts',component:posts
   },
   {
     path:"**",component:NotFoundComponent
   }
  ])],
  declarations: [AppComponent, HelloComponent, ChildParentClass, SignupFormComponent, newcoursearray, ChangePasswordComponent, posts, NavbarComponent, HomeComponent, GithubFollowersComponent, GithubProfileComponent, NotFoundComponent],
  bootstrap: [AppComponent],
  providers:[
    PostsService,
  {provide:ErrorHandler,useClass:AppErrorHandler}
   ]
})
export class AppModule { }
