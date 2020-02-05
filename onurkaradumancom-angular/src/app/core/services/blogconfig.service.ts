import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogconfig } from '../models/blogconfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogconfigService {
  assetsDirectory: string = "assets/";

  constructor(public httpclient: HttpClient) { }

  public getBlogConfig():Observable<Blogconfig> {
    let fullpath = this.getFullPathOfBlogconfigs();
    return this.httpclient.get<Blogconfig>(fullpath);
  }

  private getFullPathOfBlogconfigs() {
    return this.assetsDirectory + "blog-config/config.json";
  }
}
