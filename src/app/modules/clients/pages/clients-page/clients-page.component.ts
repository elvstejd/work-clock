import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Client } from '../../interfaces/client';
import { Store } from '@ngrx/store';
import { addClient, loadClients } from '../../store/client.actions';
import { selectAllClients } from '../../store/client.selectors';
import { IdGeneratorService } from 'src/app/shared/services/id-generator.service';

@Component({
  selector: 'app-index',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css'],
})
export class ClientsPageComponent {
  clients$ = this.store.select(selectAllClients);
  search = new FormControl('');
  addClientModalVisible = false;

  constructor(private store: Store, private idGenenerator: IdGeneratorService) {
    this.store.dispatch(loadClients());
  }

  showAddClientModal() {
    this.addClientModalVisible = true;
  }

  handleCreateClient(client: Client) {
    this.store.dispatch(
      addClient({
        client: {
          ...client,
          id: this.idGenenerator.generate('CL'),
          createdAt: new Date().toISOString(),
        },
      })
    );
    this.addClientModalVisible = false;
  }
}
