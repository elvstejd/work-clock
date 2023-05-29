import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Store } from '@ngrx/store';
import { addClient, updateClient } from '../../store/client.actions';
import { IdGeneratorService } from 'src/app/shared/services/id-generator.service';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  @Input() loading = false;

  clientForm = this.fb.group({
    company: ['', [Validators.required]],
    contactName: ['', [Validators.required]],
    contactEmail: ['', [Validators.required, Validators.email]],
  });

  defaultClient: Client | null = null;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private dialogConfig: DynamicDialogConfig,
    private dialogRef: DynamicDialogRef,
    private store: Store,
    private idGenenerator: IdGeneratorService
  ) {}

  ngOnInit(): void {
    if (!this.dialogConfig.data) return;
    const client = this.dialogConfig.data.client;
    if (client) this.defaultClient = client as Client;
    console.log('COMPONENT LOADED WITH', this.defaultClient);

    this.clientForm.patchValue(client);
  }

  handleSubmit() {
    this.isSubmitted = true;
    if (!this.clientForm.valid) return;

    const newClient = !this.defaultClient;

    if (newClient) {
      this.store.dispatch(
        addClient({
          client: {
            company: this.clientForm.get('company')?.value ?? '',
            contactName: this.clientForm.get('contactName')?.value ?? '',
            contactEmail: this.clientForm.get('contactEmail')?.value ?? '',
            id: this.idGenenerator.generate(),
            createdAt: new Date().toISOString(),
          },
        })
      );
    } else {
      this.store.dispatch(
        updateClient({
          client: {
            ...this.defaultClient,
            company: this.clientForm.get('company')?.value ?? '',
            contactName: this.clientForm.get('contactName')?.value ?? '',
            contactEmail: this.clientForm.get('contactEmail')?.value ?? '',
          },
        })
      );
    }

    this.dialogRef.close();
  }

  showInvalidClass(field: string) {
    const fieldState = this.clientForm.get(field);
    return (
      fieldState?.invalid &&
      (fieldState?.touched || fieldState.dirty || this.isSubmitted)
    );
  }

  showError(field: string, error: string) {
    const fieldState = this.clientForm.get(field);
    return (
      fieldState?.hasError(error) &&
      (fieldState?.touched || fieldState.dirty || this.isSubmitted)
    );
  }
}
