import  {Component,OnInit} from '@angular/core';
import {PostsService} from './posts.service';
import    {AppError}  from './common/app-error';
import    {notfound}  from './common/not-found';
import    {badinput}  from './common/bad-input';
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
  originalerror:any;
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
     },(error:AppError)=>{
       if (error instanceof badinput)
        { 
          this.error =400;
          this.originalerror =error.originalerror; 
        }
        else 
        {
          throw error;
        }
     });
   }
  
  updatepost(post)
  {
    this.service.updatepost(post).
    subscribe(response =>
    {
      console.log(response.json());
    });
  }

  deletepost(post)
  {
    this.service.deletepost(1001).
    subscribe(response =>
    {
      let index =this.posts.indexOf(post);
      this.posts.splice(index,1);
    },(error:AppError) => {
       if (error instanceof notfound)
       alert ('this post has already been deleted ');
       else throw error;
    })
  }
}