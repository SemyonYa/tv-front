import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tv-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() name: string;
  @Input() size: number = 24;
  @Input() transition: number = 0.5;
  @Input() color: string = 'black';
  @Input() hoverColor: string;
  @Input() activeColor: string;
  @Input() active: boolean;
  hover = false;

  constructor() { }

  ngOnInit(): void {
  }

}
