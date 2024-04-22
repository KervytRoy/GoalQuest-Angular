/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateActivityImportantStatusRequest } from '../../models/update-activity-important-status-request';

export interface ApiActivitiesUpdateActivityImportantStatusIdPut$Params {
  id: number;
      body?: UpdateActivityImportantStatusRequest
}

export function apiActivitiesUpdateActivityImportantStatusIdPut(http: HttpClient, rootUrl: string, params: ApiActivitiesUpdateActivityImportantStatusIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiActivitiesUpdateActivityImportantStatusIdPut.PATH, 'put');
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

apiActivitiesUpdateActivityImportantStatusIdPut.PATH = '/api/Activities/UpdateActivityImportantStatus/{id}';
