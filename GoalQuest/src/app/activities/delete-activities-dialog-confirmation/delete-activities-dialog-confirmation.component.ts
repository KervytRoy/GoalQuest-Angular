import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-activities-dialog-confirmation',
  templateUrl: './delete-activities-dialog-confirmation.component.html',
  styleUrl: './delete-activities-dialog-confirmation.component.css'
})
export class DeleteActivitiesDialogConfirmationComponent {

  constructor(public dialogRef: MatDialogRef<DeleteActivitiesDialogConfirmationComponent>) { }

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
