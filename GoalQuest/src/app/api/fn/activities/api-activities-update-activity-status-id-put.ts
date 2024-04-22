/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateActivityStatusRequest } from '../../models/update-activity-status-request';

export interface ApiActivitiesUpdateActivityStatusIdPut$Params {
  id: number;
      body?: UpdateActivityStatusRequest
}

export function apiActivitiesUpdateActivityStatusIdPut(http: HttpClient, rootUrl: string, params: ApiActivitiesUpdateActivityStatusIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiActivitiesUpdateActivityStatusIdPut.PATH, 'put');
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

apiActivitiesUpdateActivityStatusIdPut.PATH = '/api/Activities/UpdateActivityStatus/{id}';
