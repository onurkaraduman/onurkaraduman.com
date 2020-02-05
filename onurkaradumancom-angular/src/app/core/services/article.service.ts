import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  assetsDirectory: string = "assets/";

  constructor(public httpclient: HttpClient) { }

  public getArticleList(): Observable<Article[]> {
    let fullpath = this.getFullPathOfArticleList();
    return this.httpclient.get<Article[]>(fullpath);
  }

  public getArticleByFileName(fileName: String): Observable<Article> {
    let fullpath = this.getFullPathOfArticleList();
    return this.httpclient.get<Article[]>(fullpath).pipe(map(articles => articles.filter(article => article.fileName === fileName)[0]));
  }

  public getArticleContent(fileName: String, category: String) {
    let fullPath = this.getFullPathOfArticle(fileName, category);
    return this.httpclient.get(fullPath, { responseType: 'text' });
  }

  private getFullPathOfArticleList() {
    return this.assetsDirectory + "articles/articles.json";
  }

  private getFullPathOfArticle(name: String, category: String) {
    return this.assetsDirectory + "articles/" + category + "/" + name;
  }
}
