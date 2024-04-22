/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GoalDto } from '../../models/goal-dto';

export interface ApiGoalsGetAllGoalsGet$Json$Params {
}

export function apiGoalsGetAllGoalsGet$Json(http: HttpClient, rootUrl: string, params?: ApiGoalsGetAllGoalsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GoalDto>>> {
  const rb = new RequestBuilder(rootUrl, apiGoalsGetAllGoalsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GoalDto>>;
    })
  );
}

apiGoalsGetAllGoalsGet$Json.PATH = '/api/Goals/GetAllGoals';
