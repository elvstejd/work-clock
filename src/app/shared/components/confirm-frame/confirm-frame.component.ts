import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-confirm-frame',
  templateUrl: './confirm-frame.component.html',
  styleUrls: ['./confirm-frame.component.css'],
})
export class ConfirmFrameComponent implements OnInit {
  text: string = '';

  constructor(
    private dialogConfig: DynamicDialogConfig,
    private dialogRef: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    this.text = this.dialogConfig.data.text;
  }

  handleConfirm() {
    this.dialogConfig.data.onConfirm();
    this.dialogRef.close();
  }

  handleDismiss() {
    this.dialogRef.close();
  }
}
