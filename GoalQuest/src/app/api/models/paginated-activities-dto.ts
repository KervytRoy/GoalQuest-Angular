/* tslint:disable */
/* eslint-disable */
import { ActivityDto } from '../models/activity-dto';
export interface PaginatedActivitiesDto {
  activities?: Array<ActivityDto> | null;
  totalRecords?: number;
}
