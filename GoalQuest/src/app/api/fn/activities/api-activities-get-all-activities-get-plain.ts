/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ActivityDto } from '../../models/activity-dto';

export interface ApiActivitiesGetAllActivitiesGet$Plain$Params {
}

export function apiActivitiesGetAllActivitiesGet$Plain(http: HttpClient, rootUrl: string, params?: ApiActivitiesGetAllActivitiesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ActivityDto>>> {
  const rb = new RequestBuilder(rootUrl, apiActivitiesGetAllActivitiesGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ActivityDto>>;
    })
  );
}

apiActivitiesGetAllActivitiesGet$Plain.PATH = '/api/Activities/GetAllActivities';
