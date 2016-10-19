import { Action } from '@ngrx/store';

export class CounterActions {
  static ADD = 'ADD';
  static ADD_FAILED = 'ADD_FAILED';
  static ADD_FULFILLED = 'ADD_FULFILLED';

  add(numberToAdd: number): Action {
    return {
      type: CounterActions.ADD,
      payload: numberToAdd
    };
  }

  addFailed(error: any): Action {
    return {
      type: CounterActions.ADD_FAILED,
      payload: error
    };
  }

  addFulfilled(count: number): Action {
    return {
      type: CounterActions.ADD_FULFILLED,
      payload: {
        count
      }
    };
  }
}
