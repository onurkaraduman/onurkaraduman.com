import { Component, OnInit } from '@angular/core';
import { Footer } from 'src/app/core/models/blogconfig';
import { BlogconfigService } from 'src/app/core/services/blogconfig.service';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  footerConfig: Footer = {
    info: "no info",
    developer: "no developer",
    developerGithupProfileLink: "github.com"
  };

  constructor(private blogConfigService: BlogconfigService) { }

  ngOnInit() {
    this.initHeaderConfig();
  }

  initHeaderConfig() {
    this.blogConfigService.getBlogConfig().subscribe(
      blogConfig => this.footerConfig = blogConfig.footer,
      err => {
        console.log(err);
      }
    );
  }
}
