import { Component, Input, OnInit } from '@angular/core';
import { Fake } from 'src/app/models/fake.model';

@Component({
  selector: 'tv-titles-item',
  templateUrl: './titles-item.component.html',
  styleUrls: ['./titles-item.component.scss']
})
export class TitlesItemComponent implements OnInit {
  @Input() item: Fake;

  constructor() { }

  ngOnInit(): void {
  }

}
