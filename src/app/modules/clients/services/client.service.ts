import { Injectable } from '@angular/core';
import { of, Observable, delay } from 'rxjs';
import { Client } from '../interfaces/client';

const clients: Client[] = [
  {
    id: 'CLAsdRc',
    company: 'Deloitte',
    contactName: 'Mark Andressen',
    contactEmail: 'm.andressen@deloitte.com',
    createdAt: '2023-05-16T19:41:22.033Z',
  },
  {
    id: 'CLLkG5F',
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
  private clients: Observable<Client[]> = of(clients);

  getClients() {
    return this.clients;
  }
}
