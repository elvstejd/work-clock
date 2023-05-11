import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientsPageComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ClientsModule {}
