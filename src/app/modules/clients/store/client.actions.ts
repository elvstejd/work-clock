import { createAction, props } from '@ngrx/store';
import { Client } from '../interfaces/client';

export const addClient = createAction(
  '[Clients] Add Client',
  props<{ client: Client }>()
);

export const removeClient = createAction(
  '[Clients] Remove Client',
  props<{ id: string }>()
);

export const loadClients = createAction('[Clients] Load Clients');

export const loadClientsSuccess = createAction(
  '[Clients Service] Client Load Success',
  props<{ clients: Client[] }>()
);

export const loadClientsFailure = createAction(
  '[Clients Service] Client Load Failure',
  props<{ error: string }>()
);
