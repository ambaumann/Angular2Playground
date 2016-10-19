import { Map, Record } from 'immutable';


export interface Counter {
  currentCount: number;
}

export interface CounterState extends Counter, Map<string,number|string> {}

export const CounterStateRecord = Record({
  currentCount: 0
});
