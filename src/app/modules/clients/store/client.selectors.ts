import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientState } from './client.reducer';

const clientSelector = createFeatureSelector<ClientState>('clients');

export const selectAllClients = createSelector(
  clientSelector,
  (state) => state.clients
);

export const selectClientListStatus = createSelector(
  clientSelector,
  (state) => state.status
);

export const selectClientListErrorMessage = createSelector(
  clientSelector,
  (state) => state.error
);
