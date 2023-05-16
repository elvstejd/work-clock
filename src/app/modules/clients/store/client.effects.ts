import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ClientService } from '../services/client.service';
import {
  loadClients,
  loadClientsFailure,
  loadClientsSuccess,
} from './client.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

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
          tap((clients) => console.log(clients)),
          map((clients) => loadClientsSuccess({ clients })),
          catchError((error) => of(loadClientsFailure({ error })))
        )
      )
    )
  );
}
