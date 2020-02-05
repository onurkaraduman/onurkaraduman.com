import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogconfigService } from './services/blogconfig.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BlogconfigService
  ]
})
export class CoreModule { }
