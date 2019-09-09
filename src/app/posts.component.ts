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
  error:any;
  constructor(private service:PostsService){
      
  }
  
   ngOnInit()
   {
       this.service.getposts()
    .subscribe(response=> {
     this.posts=response.json();
   },error =>{
      this.error=0;
      // alert("unexpected error occured");
      // console.log('error occured');
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
     },error=>{
       this.error=0;
     });
   }
  
  updatepost(post)
  {
    this.service.updatepost(post).
    subscribe(response =>
    {
      console.log(response.json());
    },error=>{
      this.error =0;
    })
  }

  deletepost(post)
  {
    this.service.deletepost(1001).
    subscribe(response =>
    {
      let index =this.posts.indexOf(post);
      this.posts.splice(index,1);
    },(error:Response) => {
       if (error.status===404)
       this.error=404;
    })
  }
}