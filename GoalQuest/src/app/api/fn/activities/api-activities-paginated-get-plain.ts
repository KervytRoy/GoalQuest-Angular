/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedActivitiesDto } from '../../models/paginated-activities-dto';

export interface ApiActivitiesPaginatedGet$Plain$Params {
  goalId?: number;
  pageNumber?: number;
  pageSize?: number;
}

export function apiActivitiesPaginatedGet$Plain(http: HttpClient, rootUrl: string, params?: ApiActivitiesPaginatedGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedActivitiesDto>> {
  const rb = new RequestBuilder(rootUrl, apiActivitiesPaginatedGet$Plain.PATH, 'get');
  if (params) {
    rb.query('goalId', params.goalId, {});
    rb.query('pageNumber', params.pageNumber, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedActivitiesDto>;
    })
  );
}

apiActivitiesPaginatedGet$Plain.PATH = '/api/Activities/paginated';
