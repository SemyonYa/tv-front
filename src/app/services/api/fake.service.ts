import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Fake } from '../../models/fake.model';

@Injectable({
  providedIn: 'root'
})
export class FakeService {
  list$: BehaviorSubject<Fake[]> = new BehaviorSubject<Fake[]>(undefined);

  constructor(private http: HttpClient) { }

  fetchList(): void {
    const list: Fake[] = [1, 2, 3, 4, 5, 9, 4, 87].map(
      (val, index) => new Fake(
        val,
        `Огонь ${val}`,
        val % 2 == 0 ? `Фильм с отличным актерским составом...` : 'Впечатляющая история о судьбах людей...',
        val * index + 2,
        new Date()
      )
    );

    setTimeout(() => {
      this.list$.next(list);
    }, 1000);
  }

  loadingList(): void {
    this.list$.next(undefined);
  }
}
