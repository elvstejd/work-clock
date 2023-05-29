import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Client } from '../../interfaces/client';
import { Store } from '@ngrx/store';
import { loadClients, removeClient } from '../../store/client.actions';
import {
  selectAllClients,
  selectClientListErrorMessage,
  selectClientListStatus,
} from '../../store/client.selectors';
import { Table } from 'primeng/table';
import { DialogService } from 'primeng/dynamicdialog';
import { ClientFormComponent } from '../../components/client-form/client-form.component';
import { ConfirmFrameComponent } from 'src/app/shared/components/confirm-frame/confirm-frame.component';

@Component({
  selector: 'app-index',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css'],
  providers: [DialogService],
})
export class ClientsPageComponent {
  clients$ = this.store.select(selectAllClients);
  clientListStatus$ = this.store.select(selectClientListStatus);
  clientListErrorMessage$ = this.store.select(selectClientListErrorMessage);

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

  showDeleteClientConfirm(client: Client) {
    this.dialogService.open(ConfirmFrameComponent, {
      header: 'Confirm delete',
      data: {
        text: `Are you sure you want to delete ${client.contactName} from ${client.company}?`,
        onConfirm: () => {
          if (client.id) this.store.dispatch(removeClient({ id: client.id }));
        },
      },
      width: '500px',
      contentStyle: { 'max-width': '500px' },
    });
  }
}
