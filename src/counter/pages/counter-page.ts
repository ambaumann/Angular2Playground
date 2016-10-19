import { Component } from '@angular/core';
import { CounterService } from '../counter-service';

@Component({
  template: `
    <section>
      <content-header
        [section]="section"
        [title]="title"></content-header>
      <counter
        [count]="counter.currentCount$"
        (increment)="counter.increment()"
        (decrement)="counter.decrement()"></counter>
      <h1>Hello World</h1>
    </section>
  `
})
export class CounterPageComponent {
  section = 'Spotlight';
  title = 'Counterrrssss';
  constructor(public counter: CounterService ) {}
}
