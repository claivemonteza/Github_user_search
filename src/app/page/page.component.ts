import { Component, OnInit, NgZone } from '@angular/core';
import { IGitHub } from '../model/github.model';
import { GitHubService } from '../service/github.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  git!: IGitHub;
  visible: boolean = false;
  constructor(
    private themeService: ThemeService,
    private githubService: GitHubService
  ) { }

  ngOnInit(): void {
    
  }

  search(username: string) {
    this.githubService.getUser(username).subscribe(data => {
      this.git = data;
      this.visible = true;
    });
    if(username===''){
      this.visible = false;
    }
  }

  /* Change theme */
  toogleTheme() {
    this.themeService.toggleMode();
  }
}
