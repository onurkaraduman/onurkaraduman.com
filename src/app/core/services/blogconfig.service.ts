import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogconfig } from '../models/blogconfig';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BlogconfigService {

  constructor(public httpclient: HttpClient) { }

  public getBlogConfig(): Observable<Blogconfig> {
    let fullpath = this.getFullPathOfBlogconfigs();
    return this.httpclient.get<Blogconfig>(fullpath);
  }

  private getFullPathOfBlogconfigs() {
    let blogConfigUrl = environment.blog_content_url;
    return blogConfigUrl + "/" + "config/config.json";
  }
}
