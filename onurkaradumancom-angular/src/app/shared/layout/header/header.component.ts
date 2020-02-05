import { Component, OnInit } from '@angular/core';
import { BlogconfigService } from 'src/app/core/services/blogconfig.service';
import { Header } from 'src/app/core/models/blogconfig';
import { Blogconfig } from 'src/app/core/models/blogconfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  baseUrl: String;
  headerConfig: Header = {
    title: 'no title',
    description: 'no description',
    githubLink: 'no githublink'
  };

  constructor(private blogConfigService: BlogconfigService,
    private router: Router) { }

  ngOnInit() {
    this.initHeaderConfig();
    this.initBaseUrl();
  }

  initHeaderConfig() {
    this.blogConfigService.getBlogConfig().subscribe(
      blogConfig => this.headerConfig = blogConfig.header,
      err => {
        console.log(err);
      }
    );
  }

  initBaseUrl() {
    this.baseUrl = this.router.url;
  }
}
