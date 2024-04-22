/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateGoalRequest } from '../../models/update-goal-request';

export interface ApiGoalsUpdateGoalIdPut$Params {
  id: number;
      body?: UpdateGoalRequest
}

export function apiGoalsUpdateGoalIdPut(http: HttpClient, rootUrl: string, params: ApiGoalsUpdateGoalIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiGoalsUpdateGoalIdPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiGoalsUpdateGoalIdPut.PATH = '/api/Goals/UpdateGoal/{id}';
