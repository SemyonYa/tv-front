import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'tv-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
  animations: [pageAnimation]
})
export class EnterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
