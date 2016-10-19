import 'rxjs/add/operator/let';
import 'rxjs/add/operator/pluck';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from 'src/app';
import { getCurrentCount } from './reducers/selectors';
import { CounterActions } from './counter-actions';


@Injectable()
export class CounterService {
  currentCount$: Observable<number>;

  constructor(private actions: CounterActions, private store$: Store<AppState>) {
    this.currentCount$ = store$.let(getCurrentCount());
    //this.currentCount$.subscribe(value => this.log(value));
  }

  increment(): void {
    this.store$.dispatch(
      this.actions.add(1)
    );
  }

  decrement(): void {
    this.store$.dispatch(
      this.actions.add(-1)
    );
  }
}
