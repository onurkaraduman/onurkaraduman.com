import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass']
})
export class ArticleListComponent implements OnInit {

  @Input()
  articles: Article[];

  @Input()
  articlePerPage: number;

  activeArticles: Article[];

  currentPage: number;
  pageList: number[] = [];

  constructor(private articleService: ArticleService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.currentPage = params["pageId"];
      this.updateActiveArticles();
    });
  }

  ngOnChanges() {
    if (this.articles) {
      let totalPage = this.articles.length / this.articlePerPage;
      for (let index = 1; index <= totalPage; index++) {
        this.pageList.push(index);
      }
      this.updateActiveArticles();
      this.updateActiveArticlesContent();
    }
  }

  updateActiveArticles() {
    if (this.articles) {
      if (this.currentPage) {
        this.activeArticles = this.articles.slice((this.currentPage - 1) * this.articlePerPage, this.currentPage * this.articlePerPage);
      }
      else {
        this.activeArticles = this.articles.slice(0, this.articlePerPage);
      }
    }
  }

  updateActiveArticlesContent() {
    for (let index = 0; index < this.activeArticles.length; index++) {
      let article = this.articles[index];
      this.articleService.getArticleContent(article.fileName, article.category).subscribe(content => {
        article.content = content.toString().slice(0, article.summaryCharacters);
      });
    }
    this.cleanUpNonDisplayedArticlesContent();
  }

  cleanUpNonDisplayedArticlesContent() {
    for (let index = 0; index < this.articles.length; index++) {
      let article = this.articles[index];
      if (!this.activeArticles.includes(article)) {
        article.content = "";
      }
    }
  }
}
