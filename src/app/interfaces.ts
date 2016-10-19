import { CounterState } from '../counter';
import { PlayerState, TimesState } from '../player';
import { SearchState } from '../search';
import { TracklistsState, TracksState } from '../tracklists';
import { UsersState } from '../users';


export interface AppState {
  counter: CounterState;
  player: PlayerState;
  search: SearchState;
  times: TimesState;
  tracklists: TracklistsState;
  tracks: TracksState;
  users: UsersState;
}
