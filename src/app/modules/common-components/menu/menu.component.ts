import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../models/helper/menu-item';
import { collapseAnimation } from 'src/app/animations/collapse.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'tv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [collapseAnimation]
})
export class MenuComponent implements OnInit {
  activeItemId: number;
  menu: MenuItem[] = [
    new MenuItem(
      10,
      'Фильмы',
      '/',
      'film',
      [],
    ),
    new MenuItem(
      20,
      'Все тайтлы',
      '/titles',
      'documents',
      [
        new MenuItem(
          21,
          'Тайтл',
          '/',
        ),
        new MenuItem(
          22,
          'Избранное',
          '/',
        ),
        new MenuItem(
          23,
          'ПродКом',
          '/',
        ),
      ],
    ),
    new MenuItem(
      30,
      'Задачи',
      '/tasks',
      'flag',
      [],
    ),
    new MenuItem(
      40,
      'Аналитика',
      '/analitics',
      'analytics',
      [],
    ),
    new MenuItem(
      50,
      'Календарь',
      '/calendar',
      'calendar',
      [],
    ),
    new MenuItem(
      60,
      'Запросы',
      '/queries',
      'arrow-redo',
      [],
    ),
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleItem(item: MenuItem): void {
    this.activeItemId = this.activeItemId == item.id ? undefined : item.id;
    console.log(item);
    // this.router.navigateByUrl(item.route);
  }

}
