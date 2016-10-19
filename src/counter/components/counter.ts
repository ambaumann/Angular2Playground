import {  ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//dumb display component. Will take in a count as a data value
//will have an add and subtract button
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'counter',
  template: `
    <h1>I am a counter</h1>
    <div>{{count | async | formatInteger}}<div>
    <button (click)="increment.emit()">Increment</button>
    <button (click)="decrement.emit()">Decrement</button>
  `
})
export class CounterComponent {
  @Input() count: Observable<number>;

  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
}
