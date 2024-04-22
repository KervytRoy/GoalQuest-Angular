/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiGoalsCreateGoalPost } from '../fn/goals/api-goals-create-goal-post';
import { ApiGoalsCreateGoalPost$Params } from '../fn/goals/api-goals-create-goal-post';
import { apiGoalsDeleteGoalIdDelete } from '../fn/goals/api-goals-delete-goal-id-delete';
import { ApiGoalsDeleteGoalIdDelete$Params } from '../fn/goals/api-goals-delete-goal-id-delete';
import { apiGoalsGetAllGoalsGet$Json } from '../fn/goals/api-goals-get-all-goals-get-json';
import { ApiGoalsGetAllGoalsGet$Json$Params } from '../fn/goals/api-goals-get-all-goals-get-json';
import { apiGoalsGetAllGoalsGet$Plain } from '../fn/goals/api-goals-get-all-goals-get-plain';
import { ApiGoalsGetAllGoalsGet$Plain$Params } from '../fn/goals/api-goals-get-all-goals-get-plain';
import { apiGoalsGetGoalIdGet$Json } from '../fn/goals/api-goals-get-goal-id-get-json';
import { ApiGoalsGetGoalIdGet$Json$Params } from '../fn/goals/api-goals-get-goal-id-get-json';
import { apiGoalsGetGoalIdGet$Plain } from '../fn/goals/api-goals-get-goal-id-get-plain';
import { ApiGoalsGetGoalIdGet$Plain$Params } from '../fn/goals/api-goals-get-goal-id-get-plain';
import { apiGoalsUpdateGoalIdPut } from '../fn/goals/api-goals-update-goal-id-put';
import { ApiGoalsUpdateGoalIdPut$Params } from '../fn/goals/api-goals-update-goal-id-put';
import { GoalDto } from '../models/goal-dto';

@Injectable({ providedIn: 'root' })
export class GoalsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiGoalsGetGoalIdGet()` */
  static readonly ApiGoalsGetGoalIdGetPath = '/api/Goals/GetGoal/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoalsGetGoalIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoalsGetGoalIdGet$Plain$Response(params: ApiGoalsGetGoalIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GoalDto>> {
    return apiGoalsGetGoalIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGoalsGetGoalIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoalsGetGoalIdGet$Plain(params: ApiGoalsGetGoalIdGet$Plain$Params, context?: HttpContext): Observable<GoalDto> {
    return this.apiGoalsGetGoalIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GoalDto>): GoalDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoalsGetGoalIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoalsGetGoalIdGet$Json$Response(params: ApiGoalsGetGoalIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GoalDto>> {
    return apiGoalsGetGoalIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGoalsGetGoalIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoalsGetGoalIdGet$Json(params: ApiGoalsGetGoalIdGet$Json$Params, context?: HttpContext): Observable<GoalDto> {
    return this.apiGoalsGetGoalIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GoalDto>): GoalDto => r.body)
    );
  }

  /** Path part for operation `apiGoalsGetAllGoalsGet()` */
  static readonly ApiGoalsGetAllGoalsGetPath = '/api/Goals/GetAllGoals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoalsGetAllGoalsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoalsGetAllGoalsGet$Plain$Response(params?: ApiGoalsGetAllGoalsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GoalDto>>> {
    return apiGoalsGetAllGoalsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGoalsGetAllGoalsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoalsGetAllGoalsGet$Plain(params?: ApiGoalsGetAllGoalsGet$Plain$Params, context?: HttpContext): Observable<Array<GoalDto>> {
    return this.apiGoalsGetAllGoalsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GoalDto>>): Array<GoalDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoalsGetAllGoalsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoalsGetAllGoalsGet$Json$Response(params?: ApiGoalsGetAllGoalsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GoalDto>>> {
    return apiGoalsGetAllGoalsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGoalsGetAllGoalsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoalsGetAllGoalsGet$Json(params?: ApiGoalsGetAllGoalsGet$Json$Params, context?: HttpContext): Observable<Array<GoalDto>> {
    return this.apiGoalsGetAllGoalsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GoalDto>>): Array<GoalDto> => r.body)
    );
  }

  /** Path part for operation `apiGoalsCreateGoalPost()` */
  static readonly ApiGoalsCreateGoalPostPath = '/api/Goals/CreateGoal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoalsCreateGoalPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGoalsCreateGoalPost$Response(params?: ApiGoalsCreateGoalPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiGoalsCreateGoalPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGoalsCreateGoalPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGoalsCreateGoalPost(params?: ApiGoalsCreateGoalPost$Params, context?: HttpContext): Observable<void> {
    return this.apiGoalsCreateGoalPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiGoalsUpdateGoalIdPut()` */
  static readonly ApiGoalsUpdateGoalIdPutPath = '/api/Goals/UpdateGoal/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoalsUpdateGoalIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGoalsUpdateGoalIdPut$Response(params: ApiGoalsUpdateGoalIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiGoalsUpdateGoalIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGoalsUpdateGoalIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGoalsUpdateGoalIdPut(params: ApiGoalsUpdateGoalIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiGoalsUpdateGoalIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiGoalsDeleteGoalIdDelete()` */
  static readonly ApiGoalsDeleteGoalIdDeletePath = '/api/Goals/DeleteGoal/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoalsDeleteGoalIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoalsDeleteGoalIdDelete$Response(params: ApiGoalsDeleteGoalIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiGoalsDeleteGoalIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGoalsDeleteGoalIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoalsDeleteGoalIdDelete(params: ApiGoalsDeleteGoalIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiGoalsDeleteGoalIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
