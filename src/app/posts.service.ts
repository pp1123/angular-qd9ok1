  import {Injectable}  from '@angular/core';
  import {Http} from '@angular/http';
  @Injectable ({
    providedIn :'root'
  })

  export class PostsService {
   private url='https://jsonplaceholder.typicode.com/posts'

    constructor(private http:Http){
    }
      
    getposts()
    {
      return this.http.get(this.url);
    }

    createposts(post)
    {
      return this.http.post(this.url,JSON.stringify(post));
    }   

  }