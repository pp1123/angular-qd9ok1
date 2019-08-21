import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildParentClass } from './child.component';
import { SignupFormComponent } from './sign-up.component';
import { newcoursearray } from './newcoursearray.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, ChildParentClass, SignupFormComponent, newcoursearray],
  bootstrap: [AppComponent]
})
export class AppModule { }
