import { Component, OnInit } from '@angular/core';
import { ActivitiesService, GoalsService } from '../api/services';
import { ActivityDto, CreateActivityRequest, CreateGoalRequest, GoalDto, PaginatedActivitiesDto, UpdateActivityImportantStatusRequest, UpdateActivityRequest, UpdateActivityStatusRequest, UpdateGoalRequest } from '../api/models';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateGoalDialogComponent } from './create-update-goal-dialog/create-update-goal-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { DeleteGoalConfirmationDialogComponent } from './delete-goal-confirmation-dialog/delete-goal-confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateUpdateActivityDialogComponent } from '../activities/create-update-activity-dialog/create-update-activity-dialog.component';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  protected goalList: GoalDto[] = [];
  protected selectedGoalId: number = 0;
  protected selectedGoal: boolean = false;
  protected pagedActivitiesData: ActivityDto[] = [];
  protected totalRecords: number = 0;
  protected pageIndex: number = 0;
  protected pageSize: number = 10; 
  displayedColumns: string[] = ['selected', 'name', 'createdDate', 'important', 'status', 'actions'];
  dataSource = new MatTableDataSource<ActivityDto>(this.pagedActivitiesData);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private goalsService: GoalsService,
    private activitiesService: ActivitiesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadGoals();
  }

  protected loadActivities() {
    this.dataSource.data = this.pagedActivitiesData;
  }

  protected createGoal(): void {
    const dialogRef = this.dialog.open(CreateUpdateGoalDialogComponent, {
      width: '250px'
    });

    dialogRef.componentInstance.formSubmitted.subscribe((formData: any) => {
      if (formData) {
        const nameExists = this.goalList.some(goal => goal.name === formData.name);
        if (nameExists) {
          this.snackBar.open('Goal with the same name already exists', undefined, {
            duration: 2000,
            panelClass: ['red-snackbar'],
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
          });
        } else {
          let goal: CreateGoalRequest = {
            name: formData.name,
            createdDate: new Date().toISOString().substring(0, 10)
          };

          this.goalsService.apiGoalsCreateGoalPost({ body: goal }).subscribe(response => {
            this.snackBar.open('Goal created successfully', undefined, {
              duration: 2000,
              panelClass: ['green-snackbar'],
              verticalPosition: 'bottom',
              horizontalPosition: 'right',
            });
            this.loadGoals();
          });
        }
      }
    });
  }
  protected updateGoal(goal: GoalDto): void {
    const dialogRef = this.dialog.open(CreateUpdateGoalDialogComponent, {
      width: '250px',
      data: goal
    });

    dialogRef.componentInstance.formSubmitted.subscribe((formData: any) => {
      if (formData) {
        const nameExists = this.goalList.some(existingGoal => existingGoal.name === formData.name && existingGoal.id !== goal.id);
        if (nameExists) {
          this.snackBar.open('Another goal with the same name already exists', undefined, {
            duration: 2000,
            panelClass: ['red-snackbar'],
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
          });
        } else {
          let updateGoalRequest: UpdateGoalRequest = {
            id: goal.id,
            name: formData.name
          };

          this.goalsService.apiGoalsUpdateGoalIdPut({ id: goal.id !== undefined ? goal.id : 0, body: updateGoalRequest }).subscribe(response => {
            this.snackBar.open('Goal updated successfully', undefined, {
              duration: 2000,
              panelClass: ['green-snackbar'],
              verticalPosition: 'bottom',
              horizontalPosition: 'right',
            });
          });
        }
      }
    });
  }

  private loadGoals(): void {
    this.goalsService.apiGoalsGetAllGoalsGet$Json().subscribe(gl => {
      this.goalList = gl;
    });
  }

  protected viewActivities(goalId: number, pageNumber: number): void {
    this.selectedGoal = true;
    this.selectedGoalId = goalId;
    this.pageIndex = pageNumber - 1; 
    this.activitiesService.apiActivitiesPaginatedGet$Json({ goalId: goalId, pageNumber: pageNumber, pageSize: this.pageSize }).subscribe(paginatedResponse => {
      if (paginatedResponse.activities !== null && paginatedResponse.activities !== undefined) {
        this.pagedActivitiesData = paginatedResponse.activities;
        if (paginatedResponse.totalRecords !== undefined) {
          this.totalRecords = paginatedResponse.totalRecords;
          const totalPages = Math.ceil(this.totalRecords / this.pageSize);
          if (this.pageIndex >= totalPages) {
            this.pageIndex = totalPages - 1;
          }
        }
        this.loadActivities();
      }
    });
  }

  protected previousPage(): void {
    if (this.pageIndex > 0) {
      this.viewActivities(this.selectedGoalId, this.pageIndex);
    }
  }

  protected nextPage(): void {
    const totalPages = Math.ceil(this.totalRecords / this.pageSize);
    if (this.pageIndex < totalPages - 1) {
      this.viewActivities(this.selectedGoalId, this.pageIndex + 2);
    }
  }
  selectAll(event: any) {
    this.dataSource.data.forEach((element: ActivityDto) => {
      element.selected = event.checked;
    });
  }

  protected deleteGoal(goalId: number): void {
    const dialogRef = this.dialog.open(DeleteGoalConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.goalsService.apiGoalsDeleteGoalIdDelete({ id: goalId }).subscribe(() => {
          this.snackBar.open('Goal deleted successfully', undefined, {
            duration: 2000,
            panelClass: ['green-snackbar'],
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
          });
          this.loadGoals();
        });
      }
    });
  }
  protected createActivity(): void {
    const dialogRef = this.dialog.open(CreateUpdateActivityDialogComponent, {
      width: '250px'
    });

    dialogRef.componentInstance.formSubmitted.subscribe((formData: any) => {
      if (formData) {
        this.activitiesService.apiActivitiesGetAllActivitiesGet$Json().subscribe(activitiesData => {
          const nameExists = activitiesData.some(activity => activity.name === formData.name);
          if (nameExists) {
            this.snackBar.open('Activity with the same name already exists', undefined, {
              duration: 2000,
              panelClass: ['red-snackbar'],
              verticalPosition: 'bottom',
              horizontalPosition: 'right',
            });
          } else {
            let activity: CreateActivityRequest = {
              goalId: this.selectedGoalId,
              name: formData.name,
              createdDate: new Date().toISOString().substring(0, 10)
            };

            this.activitiesService.apiActivitiesCreateActivityPost({ body: activity }).subscribe(response => {
              this.snackBar.open('Activity created successfully', undefined, {
                duration: 2000,
                panelClass: ['green-snackbar'],
                verticalPosition: 'bottom',
                horizontalPosition: 'right',
              });
              this.viewActivities(this.selectedGoalId, 1);
              this.loadGoals();
            });
          }

        });
      }
    });
  }

  protected updateActivity(activityDto: ActivityDto): void {
    const dialogRef = this.dialog.open(CreateUpdateActivityDialogComponent, {
      width: '250px',
      data: activityDto
    });

    dialogRef.componentInstance.formSubmitted.subscribe((formData: any) => {
      if (formData) {
        this.activitiesService.apiActivitiesGetAllActivitiesGet$Json().subscribe(activitiesData => {
          const nameExists = activitiesData.some(existingActivity => existingActivity.name === formData.name && existingActivity.id !== activityDto.id);
          if (nameExists) {
            this.snackBar.open('Activity with the same name already exists', undefined, {
              duration: 2000,
              panelClass: ['red-snackbar'],
              verticalPosition: 'bottom',
              horizontalPosition: 'right',
            });
          } else {
            let activity: UpdateActivityRequest = {
              id: activityDto.id,
              name: formData.name
            };

            this.activitiesService.apiActivitiesUpdateActivityIdPut({ id: activityDto.id !== undefined ? activityDto.id : 0, body: activity }).subscribe(response => {
              this.snackBar.open('Activity updated successfully', undefined, {
                duration: 2000,
                panelClass: ['green-snackbar'],
                verticalPosition: 'bottom',
                horizontalPosition: 'right',
              });
              this.viewActivities(this.selectedGoalId, 1);
              this.loadGoals();
            });
          }

        });
      }
    });
  }

  protected completeActivities(): void {
    this.pagedActivitiesData.forEach(a => {
      if (a.selected) {
        let activityRequest: UpdateActivityStatusRequest = { id: a.id };
        this.activitiesService.apiActivitiesUpdateActivityStatusIdPut({ id: a.id !== undefined ? a.id : 0, body: activityRequest }).subscribe(() => {
          this.loadGoals();
          this.viewActivities(this.selectedGoalId, 1);
        });
      }
    });
  }

  protected deleteActivities(): void {

    const dialogRef = this.dialog.open(DeleteGoalConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.pagedActivitiesData.forEach(a => {
          if (a.selected) {
            let deleteActivitiesList: number[] = []
            if (a.id !== undefined) {
              deleteActivitiesList.push(a.id);
            }
            this.activitiesService.apiActivitiesDeleteActivitiesDelete({ body: deleteActivitiesList }).subscribe(() => {
              this.viewActivities(this.selectedGoalId, 1);
              this.loadGoals();
            });
          }
        });
      }
    });

  }

  protected handleImportantChange(element: ActivityDto): void {
    let activityStatusRequest: UpdateActivityImportantStatusRequest = { id: element.id, importantStatus: true };
    this.activitiesService.apiActivitiesUpdateActivityImportantStatusIdPut({ id: element.id !== undefined ? element.id : 0, body: activityStatusRequest }).subscribe(() => {
      this.viewActivities(this.selectedGoalId, 1);
    });
  }

  getCompletedTasks(goal: GoalDto): number {
    return goal.activities ? goal.activities.filter(activity => activity.status === 2).length : 0;
  }

  getTotalTasks(goal: GoalDto): number {
    return goal.activities ? goal.activities.length : 0;
  }

  getProgress(goal: GoalDto): string {
    if (goal.activities && goal.activities.length > 0) {
      let progress = (this.getCompletedTasks(goal) / this.getTotalTasks(goal)) * 100;
      return progress.toFixed(2);
    } else {
      return "0.00";
    }
  }

}
