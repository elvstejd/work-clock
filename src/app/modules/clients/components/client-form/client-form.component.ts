import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent {
  @Output() onSubmit = new EventEmitter<Client>();
  @Input() loading = false;

  clientForm = this.fb.group({
    company: ['', [Validators.required]],
    contactName: ['', [Validators.required]],
    contactEmail: ['', [Validators.required, Validators.email]],
  });

  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  handleSubmit() {
    this.isSubmitted = true;
    if (this.clientForm.valid) {
      this.onSubmit.emit({
        company: this.clientForm.get('company')?.value ?? '',
        contactName: this.clientForm.get('contactName')?.value ?? '',
        contactEmail: this.clientForm.get('contactEmail')?.value ?? '',
      });
    }
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
