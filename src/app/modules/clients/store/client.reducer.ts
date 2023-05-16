import { createReducer, on } from '@ngrx/store';
import { Client } from '../interfaces/client';
import {
  addClient,
  loadClients,
  loadClientsFailure,
  loadClientsSuccess,
  removeClient,
} from './client.actions';

export interface ClientState {
  clients: Client[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

const initialState: ClientState = {
  clients: [],
  error: null,
  status: 'pending',
};

export const clientReducer = createReducer(
  initialState,
  on(addClient, (state, { client }) => ({
    ...state,
    clients: [...state.clients, client],
  })),
  on(removeClient, (state, { id }) => ({
    ...state,
    clients: state.clients.filter((client) => client.id !== id),
  })),
  on(loadClients, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(loadClientsSuccess, (state, { clients }) => ({
    ...state,
    clients: clients,
    error: null,
    status: 'success',
  })),
  on(loadClientsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
