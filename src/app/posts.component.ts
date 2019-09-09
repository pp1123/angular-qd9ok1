import  {Component,OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component ({
  selector:'posts',
 templateUrl:'./posts.component.html'
})

export class posts implements OnInit 
{
 posts:any[];
 private url ='https://jsonplaceholder.typicode.com/posts';

  constructor(private service:PostsService){
       
  }
   
   ngOnInit()
   {
       this.service.getposts()
    .subscribe(response=> {
     this.posts=response.json();
   });
   }



   createPost(input:HTMLInputElement)
   {
     let post ={title:input.value};
     input.value;
     this.service.createposts(post).
     subscribe(response =>{
       posts['id']=response.json().id;
       this.posts.splice(0,0,post);
     })
   }

}