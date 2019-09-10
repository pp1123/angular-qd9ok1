  import {Injectable}  from '@angular/core';
  import {Http} from '@angular/http';
  import 'rxjs/add/operator/catch';
  import {Observable} from 'rxjs/Observable';
  import    {AppError}  from './common/app-error';
  import    {notfound}   from './common/not-found';
import    {badinput}   from './common/bad-input';
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
      return this.http.post(this.url,JSON.stringify(post))
      .catch(this.handleError);
    }   
    
    updatepost(post)
    {
      return this.http.patch(this.url +'/'+post.id,JSON.stringify({isRead:true}))
    }

    deletepost(id)
    {
      return this.http.delete(this.url + '/'+id)
      .catch(this.handleError);
      
    }

   private handleError(error:Response)
   {
     if (error.status===400)
     return Observable.throw(new badinput());

     else if (error.status===404)
     return Observable.throw(new notfound() );
     else
     return Observable.throw(new AppError());
   }

  }