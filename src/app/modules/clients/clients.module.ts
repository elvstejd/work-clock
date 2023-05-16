import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { DialogModule } from 'primeng/dialog';
import { StoreModule } from '@ngrx/store';
import { clientReducer } from './store/client.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClientEffects } from './store/client.effects';

@NgModule({
  declarations: [ClientsPageComponent, ClientFormComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TableModule,
    SharedModule,
    ReactiveFormsModule,
    DialogModule,
    StoreModule.forFeature('clients', clientReducer),
    EffectsModule.forFeature([ClientEffects]),
  ],
})
export class ClientsModule {}
