import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateGoalRequest, GoalDto, UpdateGoalRequest } from '../../api/models';
import { GoalsService } from '../../api/services/goals.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-update-goal-dialog',
  templateUrl: './create-update-goal-dialog.component.html',
  styleUrls: ['./create-update-goal-dialog.component.css']
})
export class CreateUpdateGoalDialogComponent implements OnInit {
  goalForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(80)]]
  });
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private goalsService: GoalsService,
    @Inject(MAT_DIALOG_DATA) public data: GoalDto,
    private dialogRef: MatDialogRef<CreateUpdateGoalDialogComponent>,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.goalForm = this.fb.group({
      name: [this.data ? this.data.name : '', [Validators.required, Validators.maxLength(80)]]
    });
  }
  
  onSubmit(): void {
    if (this.goalForm.valid) {
      this.formSubmitted.emit(this.goalForm.value);
      this.dialogRef.close(true);

    }
  }
}
