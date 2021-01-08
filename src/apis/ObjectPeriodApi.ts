/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.25
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CommonGetAutocompleteV1Response,
    CommonGetAutocompleteV1ResponseFromJSON,
    CommonGetAutocompleteV1ResponseToJSON,
} from '../models';

export interface PeriodGetAutocompleteV1Request {
    sSelector: PeriodGetAutocompleteV1SSelectorEnum;
    sQuery?: string;
}

/**
 * 
 */
export class ObjectPeriodApi extends runtime.BaseAPI {

    /**
     * Get the list of Periods to be used in a dropdown or autocomplete control.
     * Retrieve Periods and IDs
     */
    async periodGetAutocompleteV1Raw(requestParameters: PeriodGetAutocompleteV1Request): Promise<runtime.ApiResponse<CommonGetAutocompleteV1Response>> {
        if (requestParameters.sSelector === null || requestParameters.sSelector === undefined) {
            throw new runtime.RequiredError('sSelector','Required parameter requestParameters.sSelector was null or undefined when calling periodGetAutocompleteV1.');
        }

        const queryParameters: any = {};

        if (requestParameters.sQuery !== undefined) {
            queryParameters['sQuery'] = requestParameters.sQuery;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/period/getAutocomplete/{sSelector}`.replace(`{${"sSelector"}}`, encodeURIComponent(String(requestParameters.sSelector))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CommonGetAutocompleteV1ResponseFromJSON(jsonValue));
    }

    /**
     * Get the list of Periods to be used in a dropdown or autocomplete control.
     * Retrieve Periods and IDs
     */
    async periodGetAutocompleteV1(requestParameters: PeriodGetAutocompleteV1Request): Promise<CommonGetAutocompleteV1Response> {
        const response = await this.periodGetAutocompleteV1Raw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum PeriodGetAutocompleteV1SSelectorEnum {
    ActiveNormal = 'ActiveNormal',
    ActiveNormalAndEndOfYear = 'ActiveNormalAndEndOfYear',
    AllNormal = 'AllNormal',
    AllNormalAndEndOfYear = 'AllNormalAndEndOfYear'
}
