import { Injectable } from '@angular/core';
import { of, Observable, delay } from 'rxjs';
import { Client } from '../interfaces/client';

const clients: Client[] = [
  {
    id: '1',
    company: 'Deloitte',
    contactName: 'Mark Andressen',
    contactEmail: 'm.andressen@deloitte.com',
    createdAt: '2023-05-16T19:41:22.033Z',
  },
  {
    id: '2',
    company: 'Ernst & Young',
    contactName: 'Joshua Carlston',
    contactEmail: 'jcarl@ey.com',
    createdAt: '2023-04-16T15:30:22.033Z',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clients: Observable<Client[]> = of(clients).pipe(delay(2000));

  getClients() {
    return this.clients;
  }
}
