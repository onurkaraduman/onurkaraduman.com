import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
  articleFileName: String;
  article: Article = {
    category: "",
    content: "",
    date: "",
    fileName: "",
    postedBy: "",
    summaryCharacters: 0,
    title: ""
  }

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.articleFileName = this.route.snapshot.params.fileName;
    this.getArticleByFileName(this.articleFileName);
  }

  getArticleByFileName(fileName: String) {
    this.articleService.getArticleByFileName(fileName).subscribe(article => {
      this.article = article;
      this.getArticleFullContent(article);
    })
  }

  getArticleFullContent(article: Article) {
    this.articleService.getArticleContent(article.fileName, article.category).subscribe(content => {
      this.article.content = content;
    });
  }

}
