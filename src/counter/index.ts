import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/shared';

import { CounterPageComponent } from './pages/counter-page';
import { CounterComponent } from './components/counter';


import { CounterActions } from './counter-actions';
import { CounterService } from './counter-service';

export { CounterActions, CounterService };
export { counterReducer } from './reducers/counter-reducer';
export { CounterState } from './reducers/counter-state';

const routes: Routes = [
  {path: 'counter', component: CounterPageComponent}
];


@NgModule({
  declarations: [
    CounterPageComponent,
    CounterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    CounterService,
    CounterActions
  ]
})
export class CounterModule {}
