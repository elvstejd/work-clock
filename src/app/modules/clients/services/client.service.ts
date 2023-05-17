import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Observable, of, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private storage: LocalStorageService) {}

  getClients(): Observable<Client[]> {
    const clients = this.storage.getData('clients');

    if (Array.isArray(clients)) {
      return of(clients);
    }

    return of([]);
  }

  async saveClient(client: Client) {
    const clients = await lastValueFrom(this.getClients());
    this.storage.saveData('clients', [...clients, client]);
  }
}
