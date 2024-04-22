/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ActivityDto } from '../models/activity-dto';
import { apiActivitiesCreateActivityPost } from '../fn/activities/api-activities-create-activity-post';
import { ApiActivitiesCreateActivityPost$Params } from '../fn/activities/api-activities-create-activity-post';
import { apiActivitiesDeleteActivitiesDelete } from '../fn/activities/api-activities-delete-activities-delete';
import { ApiActivitiesDeleteActivitiesDelete$Params } from '../fn/activities/api-activities-delete-activities-delete';
import { apiActivitiesGetAllActivitiesGet$Json } from '../fn/activities/api-activities-get-all-activities-get-json';
import { ApiActivitiesGetAllActivitiesGet$Json$Params } from '../fn/activities/api-activities-get-all-activities-get-json';
import { apiActivitiesGetAllActivitiesGet$Plain } from '../fn/activities/api-activities-get-all-activities-get-plain';
import { ApiActivitiesGetAllActivitiesGet$Plain$Params } from '../fn/activities/api-activities-get-all-activities-get-plain';
import { apiActivitiesPaginatedGet$Json } from '../fn/activities/api-activities-paginated-get-json';
import { ApiActivitiesPaginatedGet$Json$Params } from '../fn/activities/api-activities-paginated-get-json';
import { apiActivitiesPaginatedGet$Plain } from '../fn/activities/api-activities-paginated-get-plain';
import { ApiActivitiesPaginatedGet$Plain$Params } from '../fn/activities/api-activities-paginated-get-plain';
import { apiActivitiesUpdateActivityIdPut } from '../fn/activities/api-activities-update-activity-id-put';
import { ApiActivitiesUpdateActivityIdPut$Params } from '../fn/activities/api-activities-update-activity-id-put';
import { apiActivitiesUpdateActivityImportantStatusIdPut } from '../fn/activities/api-activities-update-activity-important-status-id-put';
import { ApiActivitiesUpdateActivityImportantStatusIdPut$Params } from '../fn/activities/api-activities-update-activity-important-status-id-put';
import { apiActivitiesUpdateActivityStatusIdPut } from '../fn/activities/api-activities-update-activity-status-id-put';
import { ApiActivitiesUpdateActivityStatusIdPut$Params } from '../fn/activities/api-activities-update-activity-status-id-put';
import { PaginatedActivitiesDto } from '../models/paginated-activities-dto';

@Injectable({ providedIn: 'root' })
export class ActivitiesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiActivitiesPaginatedGet()` */
  static readonly ApiActivitiesPaginatedGetPath = '/api/Activities/paginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivitiesPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivitiesPaginatedGet$Plain$Response(params?: ApiActivitiesPaginatedGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedActivitiesDto>> {
    return apiActivitiesPaginatedGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiActivitiesPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivitiesPaginatedGet$Plain(params?: ApiActivitiesPaginatedGet$Plain$Params, context?: HttpContext): Observable<PaginatedActivitiesDto> {
    return this.apiActivitiesPaginatedGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedActivitiesDto>): PaginatedActivitiesDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivitiesPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivitiesPaginatedGet$Json$Response(params?: ApiActivitiesPaginatedGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedActivitiesDto>> {
    return apiActivitiesPaginatedGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiActivitiesPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivitiesPaginatedGet$Json(params?: ApiActivitiesPaginatedGet$Json$Params, context?: HttpContext): Observable<PaginatedActivitiesDto> {
    return this.apiActivitiesPaginatedGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedActivitiesDto>): PaginatedActivitiesDto => r.body)
    );
  }

  /** Path part for operation `apiActivitiesGetAllActivitiesGet()` */
  static readonly ApiActivitiesGetAllActivitiesGetPath = '/api/Activities/GetAllActivities';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivitiesGetAllActivitiesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivitiesGetAllActivitiesGet$Plain$Response(params?: ApiActivitiesGetAllActivitiesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ActivityDto>>> {
    return apiActivitiesGetAllActivitiesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiActivitiesGetAllActivitiesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivitiesGetAllActivitiesGet$Plain(params?: ApiActivitiesGetAllActivitiesGet$Plain$Params, context?: HttpContext): Observable<Array<ActivityDto>> {
    return this.apiActivitiesGetAllActivitiesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ActivityDto>>): Array<ActivityDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivitiesGetAllActivitiesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivitiesGetAllActivitiesGet$Json$Response(params?: ApiActivitiesGetAllActivitiesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ActivityDto>>> {
    return apiActivitiesGetAllActivitiesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiActivitiesGetAllActivitiesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivitiesGetAllActivitiesGet$Json(params?: ApiActivitiesGetAllActivitiesGet$Json$Params, context?: HttpContext): Observable<Array<ActivityDto>> {
    return this.apiActivitiesGetAllActivitiesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ActivityDto>>): Array<ActivityDto> => r.body)
    );
  }

  /** Path part for operation `apiActivitiesCreateActivityPost()` */
  static readonly ApiActivitiesCreateActivityPostPath = '/api/Activities/CreateActivity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivitiesCreateActivityPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivitiesCreateActivityPost$Response(params?: ApiActivitiesCreateActivityPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiActivitiesCreateActivityPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiActivitiesCreateActivityPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivitiesCreateActivityPost(params?: ApiActivitiesCreateActivityPost$Params, context?: HttpContext): Observable<void> {
    return this.apiActivitiesCreateActivityPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiActivitiesUpdateActivityIdPut()` */
  static readonly ApiActivitiesUpdateActivityIdPutPath = '/api/Activities/UpdateActivity/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivitiesUpdateActivityIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivitiesUpdateActivityIdPut$Response(params: ApiActivitiesUpdateActivityIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiActivitiesUpdateActivityIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiActivitiesUpdateActivityIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivitiesUpdateActivityIdPut(params: ApiActivitiesUpdateActivityIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiActivitiesUpdateActivityIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiActivitiesUpdateActivityStatusIdPut()` */
  static readonly ApiActivitiesUpdateActivityStatusIdPutPath = '/api/Activities/UpdateActivityStatus/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivitiesUpdateActivityStatusIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivitiesUpdateActivityStatusIdPut$Response(params: ApiActivitiesUpdateActivityStatusIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiActivitiesUpdateActivityStatusIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiActivitiesUpdateActivityStatusIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivitiesUpdateActivityStatusIdPut(params: ApiActivitiesUpdateActivityStatusIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiActivitiesUpdateActivityStatusIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiActivitiesUpdateActivityImportantStatusIdPut()` */
  static readonly ApiActivitiesUpdateActivityImportantStatusIdPutPath = '/api/Activities/UpdateActivityImportantStatus/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivitiesUpdateActivityImportantStatusIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivitiesUpdateActivityImportantStatusIdPut$Response(params: ApiActivitiesUpdateActivityImportantStatusIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiActivitiesUpdateActivityImportantStatusIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiActivitiesUpdateActivityImportantStatusIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivitiesUpdateActivityImportantStatusIdPut(params: ApiActivitiesUpdateActivityImportantStatusIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiActivitiesUpdateActivityImportantStatusIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiActivitiesDeleteActivitiesDelete()` */
  static readonly ApiActivitiesDeleteActivitiesDeletePath = '/api/Activities/DeleteActivities';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivitiesDeleteActivitiesDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivitiesDeleteActivitiesDelete$Response(params?: ApiActivitiesDeleteActivitiesDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiActivitiesDeleteActivitiesDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiActivitiesDeleteActivitiesDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivitiesDeleteActivitiesDelete(params?: ApiActivitiesDeleteActivitiesDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiActivitiesDeleteActivitiesDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
