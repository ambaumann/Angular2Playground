import { Action, ActionReducer } from '@ngrx/store';
import { CounterActions } from '../counter-actions';
import { CounterState, CounterStateRecord } from './counter-state';

export const initialState: CounterState = new CounterStateRecord() as CounterState;

export const counterReducer: ActionReducer<CounterState> = (state: CounterState = initialState, {payload, type}: Action) => {
  switch (type) {
    case CounterActions.ADD:
      console.log('Adding in Reducer.');
      return state.set('currentCount', state.get('currentCount') as number + payload) as CounterState;
    default:
      return state;
  };
};
