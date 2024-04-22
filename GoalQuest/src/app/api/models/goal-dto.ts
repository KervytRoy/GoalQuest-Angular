/* tslint:disable */
/* eslint-disable */
import { ActivityDto } from '../models/activity-dto';
export interface GoalDto {
  activities?: Array<ActivityDto> | null;
  createdDate: string;
  id?: number;
  name: string;
}
