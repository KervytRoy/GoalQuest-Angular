/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GoalDto } from '../../models/goal-dto';

export interface ApiGoalsGetGoalIdGet$Plain$Params {
  id: number;
}

export function apiGoalsGetGoalIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiGoalsGetGoalIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GoalDto>> {
  const rb = new RequestBuilder(rootUrl, apiGoalsGetGoalIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GoalDto>;
    })
  );
}

apiGoalsGetGoalIdGet$Plain.PATH = '/api/Goals/GetGoal/{id}';
