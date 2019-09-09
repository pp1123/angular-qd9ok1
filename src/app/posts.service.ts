  import {Injectable}  from '@angular/core';
  import {Http} from '@angular/http';
  @Injectable ({
    providedIn :'root'
  })

  export class PostsService {
   private url='https://aajsonplaceholder.typicode.com/posts'

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
    
    updatepost(post)
    {
      return this.http.patch(this.url +'/'+post.id,JSON.stringify({isRead:true}))
    }

    deletepost(id)
    {
      return this.http.delete(this.url + '/'+id);
    }
  }