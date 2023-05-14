import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Client } from '../interfaces/client';

const clients: Client[] = [
  {
    id: '1',
    company: 'Deloitte',
    contactName: 'Mark Andressen',
    contactEmail: 'm.andressen@deloitte.com',
    createdAt: 'Today',
  },
  {
    id: '2',
    company: 'Ernst & Young',
    contactName: 'Joshua Carlston',
    contactEmail: 'jcarl@ey.com',
    createdAt: 'Yesterday',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clients$: Observable<Client[]> = of(clients);

  getClients() {
    return this.clients$;
  }
}
