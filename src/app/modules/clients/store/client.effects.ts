import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ClientService } from '../services/client.service';
import {
  addClient,
  loadClients,
  loadClientsFailure,
  loadClientsSuccess,
  updateClient,
} from './client.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';

@Injectable()
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private clientService: ClientService
  ) {}

  loadClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadClients),
      switchMap(() =>
        this.clientService.getClients().pipe(
          map((clients) => loadClientsSuccess({ clients })),
          catchError((error) => of(loadClientsFailure({ error })))
        )
      )
    )
  );

  persistNewClient$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addClient),
        switchMap(({ client }) => from(this.clientService.saveClient(client)))
      ),
    { dispatch: false }
  );

  persistUpdateClient$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateClient),
        switchMap(({ client }) => from(this.clientService.updateClient(client)))
      ),
    { dispatch: false }
  );
}
