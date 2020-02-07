import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticleRoutingModule } from './angular-routing-module';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MarkdownModule.forRoot()
  ]
})
export class ArticleModule { }
