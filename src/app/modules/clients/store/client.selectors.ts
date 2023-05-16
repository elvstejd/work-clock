import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientState } from './client.reducer';

const clientSelector = createFeatureSelector<ClientState>('clients');

export const selectAllClients = createSelector(
  clientSelector,
  (state) => state.clients
);
