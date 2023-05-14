import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormControl } from '@angular/forms';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-index',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css'],
})
export class ClientsPageComponent {
  clients$ = this.clientService.getClients();
  search = new FormControl('');
  addClientModalVisible = false;

  constructor(private clientService: ClientService) {}

  showAddClientModal() {
    this.addClientModalVisible = true;
  }

  handleCreateClient(client: Client) {
    console.log('Form to Page', client);
  }
}
