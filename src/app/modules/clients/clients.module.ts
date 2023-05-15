import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [ClientsPageComponent, ClientFormComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TableModule,
    SharedModule,
    ReactiveFormsModule,
    DialogModule,
  ],
})
export class ClientsModule {}
