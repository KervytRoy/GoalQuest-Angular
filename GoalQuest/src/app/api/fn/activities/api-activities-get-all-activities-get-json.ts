/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ActivityDto } from '../../models/activity-dto';

export interface ApiActivitiesGetAllActivitiesGet$Json$Params {
}

export function apiActivitiesGetAllActivitiesGet$Json(http: HttpClient, rootUrl: string, params?: ApiActivitiesGetAllActivitiesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ActivityDto>>> {
  const rb = new RequestBuilder(rootUrl, apiActivitiesGetAllActivitiesGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ActivityDto>>;
    })
  );
}

apiActivitiesGetAllActivitiesGet$Json.PATH = '/api/Activities/GetAllActivities';
