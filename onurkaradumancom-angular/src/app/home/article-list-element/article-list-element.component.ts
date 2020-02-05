import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-article-list-element',
  templateUrl: './article-list-element.component.html',
  styleUrls: ['./article-list-element.component.sass']
})
export class ArticleListElementComponent implements OnInit {

  @Input()
  article: Article;

  @Input()
  orderNumber:number;

  constructor() { }

  ngOnInit() {
  }

}
