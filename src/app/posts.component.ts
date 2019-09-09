import  {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component ({
  selector:'posts',
 templateUrl:'./posts.component.html'
})

export class posts 
{
 posts:any [];
 private url ='https://jsonplaceholder.typicode.com/';

  constructor(private http:Http){
    http.get(this.url)
    .subscribe(response=> {
     this.posts=response.json();
    });
  }
}