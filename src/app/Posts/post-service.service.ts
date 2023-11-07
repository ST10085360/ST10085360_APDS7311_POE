import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {

  private postdisplay:{_id:string, id:string, description:string, __v:string}[] = [];
  private updatedpostdisplay = new Subject<{_id:string, id:string, description:string, __v:string}[]>();

  constructor(private http: HttpClient) { }

  addpost_service(pid:string, pdesc:string)
  {
    this.http.post<{message:string, post:any}>('https://localhost:3000/api/posts', {id:pid, description:pdesc})
    .subscribe((postschema)=>
    {
      this.postdisplay.push(postschema.post);
      this.updatedpostdisplay.next([...this.postdisplay]);
    })
  }

  getpost_service()
  {
    this.http.get<{message:string, posts:any}>('https://localhost:3000/api/posts')
    .subscribe((postschema)=>
    {

      this.postdisplay = postschema.posts
      this.updatedpostdisplay.next([...this.postdisplay]);
    })
  }

  deletepost_service(postid: string)
  {
    this.http.delete('https://localhost:3000/api/posts/' + postid)
    .subscribe(()=>
    {
      const updatedpostdeleted = this.postdisplay.filter(post=>post._id!==postid);
      this.postdisplay = updatedpostdeleted;
      this.updatedpostdisplay.next([...this.postdisplay]);
    })
  }

  getUpdateListener()
  {
    return this.updatedpostdisplay.asObservable();
  }


}
