import { NgModule ,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,HttpModule],
  declarations: [AppComponent, HelloComponent, ChildParentClass, SignupFormComponent, newcoursearray, ChangePasswordComponent, posts],
  bootstrap: [AppComponent],
  providers:[
    PostsService,
  {provide:ErrorHandler,useClass:AppErrorHandler}
   ]
})
export class AppModule { }
