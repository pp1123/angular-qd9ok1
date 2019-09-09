import  {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component ({
  selector:'posts',
 templateUrl:'./posts.component.html'
})

export class posts 
{
 posts:any [];

  constructor(private http:Http){
    http.get('https://jsonplaceholder.typicode.com/')
    .subscribe(response=> {
     this.posts=response.json();
    });
  }
}