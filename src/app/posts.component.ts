import  {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component ({
  selector:'posts',
 templateUrl:'./posts.component.html'
})

export class posts 
{
 posts:any [];

  constructor(http:Http){
    posts= http.get('https://jsonplaceholder.typicode.com/');
  }
}