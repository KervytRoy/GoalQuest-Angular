/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedActivitiesDto } from '../../models/paginated-activities-dto';

export interface ApiActivitiesPaginatedGet$Json$Params {
  goalId?: number;
  pageNumber?: number;
  pageSize?: number;
}

export function apiActivitiesPaginatedGet$Json(http: HttpClient, rootUrl: string, params?: ApiActivitiesPaginatedGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedActivitiesDto>> {
  const rb = new RequestBuilder(rootUrl, apiActivitiesPaginatedGet$Json.PATH, 'get');
  if (params) {
    rb.query('goalId', params.goalId, {});
    rb.query('pageNumber', params.pageNumber, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedActivitiesDto>;
    })
  );
}

apiActivitiesPaginatedGet$Json.PATH = '/api/Activities/paginated';
