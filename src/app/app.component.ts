import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'Github User Search';
  theme = new Observable() ;
  
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.theme = this.themeService.mode$;
  }
}
