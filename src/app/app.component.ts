import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { pageAnimation } from './animations/page.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [pageAnimation],
})
export class AppComponent implements OnInit {
  title = 'KPI';
  isEnter: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .subscribe(
        e => {
          if (e instanceof NavigationEnd) {
            console.log('URL', e.url);
            this.isEnter = e.url == '/enter';
          }
        }
      );
  }
}
