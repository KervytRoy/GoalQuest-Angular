import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-goal-confirmation-dialog',
  templateUrl: './delete-goal-confirmation-dialog.component.html',
  styleUrls: ['./delete-goal-confirmation-dialog.component.css']
})
export class DeleteGoalConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteGoalConfirmationDialogComponent>) { }

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
