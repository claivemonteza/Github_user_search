import { Component, OnInit, NgZone } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { GitHub } from '../model/github.model';
import { GitHubService } from '../service/github.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  git!: GitHub;

  constructor(
    private themeService: ThemeService,
    private githubService:GitHubService
  ) { }

  ngOnInit(): void {
    this.githubService.getUser("claivemonteza").subscribe(data => {
      this.git=data;
      console.log(this.git);
    });
  }


  /* Change theme */
  toogleTheme() {
    this.themeService.toggleMode();
    console.log(this.themeService.toggleMode());
  }
}
