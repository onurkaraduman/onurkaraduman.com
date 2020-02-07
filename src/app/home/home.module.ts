import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing-module';
import { ArticleListElementComponent } from './article-list-element/article-list-element.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { MarkdownModule } from "ngx-markdown";

@NgModule({
  declarations: [HomeComponent, ArticleListElementComponent, ArticleListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MarkdownModule.forRoot()
  ]
})
export class HomeModule { }
