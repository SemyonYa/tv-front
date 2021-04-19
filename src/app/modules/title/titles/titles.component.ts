import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';
import { Fake } from '../../../models/fake.model';
import { FakeService } from '../../../services/api/fake.service';

@Component({
  selector: 'tv-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss'],
  animations: [pageAnimation],
})
export class TitlesComponent implements OnInit {
  titles: Fake[];

  constructor(private fakeService: FakeService) { }

  ngOnInit(): void {
    this.fakeService.loadingList();
    this.fakeService.fetchList();
    this.fakeService.list$
      .subscribe(
        (ts) => {
          console.log(ts);
          this.titles = ts;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
