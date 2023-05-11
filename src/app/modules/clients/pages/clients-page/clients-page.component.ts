import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css'],
})
export class ClientsPageComponent {
  clients$ = this.clientService.getClients();
  search = new FormControl('');

  constructor(private clientService: ClientService) {}
}
