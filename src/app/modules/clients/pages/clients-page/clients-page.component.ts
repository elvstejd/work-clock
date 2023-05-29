import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Client } from '../../interfaces/client';
import { Store } from '@ngrx/store';
import { loadClients } from '../../store/client.actions';
import { selectAllClients } from '../../store/client.selectors';
import { IdGeneratorService } from 'src/app/shared/services/id-generator.service';
import { Table } from 'primeng/table';
import { DialogService } from 'primeng/dynamicdialog';
import { ClientFormComponent } from '../../components/client-form/client-form.component';

@Component({
  selector: 'app-index',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css'],
  providers: [DialogService],
})
export class ClientsPageComponent {
  clients$ = this.store.select(selectAllClients);

  search = new FormControl('');

  @ViewChild('clientsTable') clientsTable?: Table;
  @ViewChild('searchInput') searchInput?: HTMLElement;

  constructor(private store: Store, private dialogService: DialogService) {
    this.store.dispatch(loadClients());
  }

  handleSearchInput() {
    this.clientsTable?.filterGlobal(this.search.value, 'contains');
  }

  clearTableFilters() {
    this.clientsTable?.clear();
    this.search.reset();
  }

  showEditClientModal(client: Client) {
    this.dialogService.open(ClientFormComponent, {
      header: 'Edit form',
      data: { client },
      width: '500px',
      contentStyle: { 'max-width': '500px' },
    });
  }

  showAddClientModal() {
    this.dialogService.open(ClientFormComponent, {
      header: 'Add form',
      width: '500px',
      contentStyle: { 'max-width': '500px' },
    });
  }
}
