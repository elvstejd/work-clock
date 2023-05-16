import { combineReducers } from '@ngrx/store';
import {
  ClientState,
  clientReducer,
} from 'src/app/modules/clients/store/client.reducer';

interface AppState {
  clients: ClientState;
}

export const appReducer = combineReducers<AppState>({
  clients: clientReducer,
});
