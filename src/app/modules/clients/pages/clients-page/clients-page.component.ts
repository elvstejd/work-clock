import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Client } from '../../interfaces/client';
import { Store } from '@ngrx/store';
import { loadClients } from '../../store/client.actions';
import { selectAllClients } from '../../store/client.selectors';

@Component({
  selector: 'app-index',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css'],
})
export class ClientsPageComponent {
  clients$ = this.store.select(selectAllClients);
  search = new FormControl('');
  addClientModalVisible = false;

  constructor(private store: Store) {
    this.store.dispatch(loadClients());
  }

  showAddClientModal() {
    this.addClientModalVisible = true;
  }

  handleCreateClient(client: Client) {
    console.log('Form to Page', client);
  }
}
