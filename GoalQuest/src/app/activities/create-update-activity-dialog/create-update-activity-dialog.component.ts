import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivitiesService } from '../../api/services';
import { ActivityDto, CreateActivityRequest, GoalDto, UpdateActivityRequest } from '../../api/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-update-activity-dialog',
  templateUrl: './create-update-activity-dialog.component.html',
  styleUrl: './create-update-activity-dialog.component.css'
})
export class CreateUpdateActivityDialogComponent implements OnInit {
  activityForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(80)]]
  });
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private activitiesService: ActivitiesService,
    @Inject(MAT_DIALOG_DATA) public data: { goalId: number; activity: ActivityDto; },
    private dialogRef: MatDialogRef<CreateUpdateActivityDialogComponent>,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activityForm = this.fb.group({
      name: [this.data ? this.data.activity.name : '', [Validators.required, Validators.maxLength(80)]]
    });
  }
  onSubmit(): void {
    if (this.activityForm.valid) {
      this.formSubmitted.emit(this.activityForm.value);
      this.dialogRef.close(true);

    }
  }

}
