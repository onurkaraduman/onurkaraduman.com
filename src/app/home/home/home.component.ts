import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { BlogconfigService } from 'src/app/core/services/blogconfig.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  articles: Article[];
  articlePerPage: number;

  filter: Map<string, string> = new Map();


  constructor(private articleService: ArticleService,
    private blogConfigService: BlogconfigService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let params = this.activatedRoute.snapshot.queryParams;
    if (params) {
      let key = Object.keys(params)[0];
      let value = params[key];
      this.filter.set(key, value);
    }
    this.initArticlePerPage();
    this.initArticles();
  }

  initArticlePerPage() {
    this.blogConfigService.getBlogConfig().subscribe(config => {
      this.articlePerPage = config.articleConfig.articlePerPage;
    })
  }

  initArticles() {
    this.articleService.getArticleList().subscribe(articles => {
      let filteredArticles = articles;
      for (let [key, value] of this.filter) {
        filteredArticles = filteredArticles.filter(a => a[key] === value);
      }
      filteredArticles.sort((a, b) => {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);
        // sort by desc
        return date2.getTime() - date1.getTime();
      })
      this.articles = filteredArticles;
    })
  }
}
