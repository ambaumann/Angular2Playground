import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';

import { AppState } from 'src/app';
import { Selector } from 'src/core';


export function getCurrentCount(): Selector<AppState, number> {
  return state$ => state$.map(state => state.counter.currentCount).distinctUntilChanged();
}
