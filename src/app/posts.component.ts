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
 private post;
 private error;
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
     },error =>{
       error='Unexpected error'
       console.log
     })
   }
  
  updatepost(post)
  {
    this.service.updatepost(post).
    subscribe(response =>
    {
      console.log(response.json());
    })
  }

  deletepost(post)
  {
    this.service.deletepost(post.id).
    subscribe(response =>
    {
      let index =this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  }
}