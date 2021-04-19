/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.40
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ActivesessionGetCurrentV1Response,
    ActivesessionGetCurrentV1ResponseFromJSON,
    ActivesessionGetCurrentV1ResponseToJSON,
} from '../models';

/**
 * 
 */
export class ObjectActivesessionApi extends runtime.BaseAPI {

    /**
     * Retrieve the details about the current activesession
     * Get Current Activesession
     */
    async activesessionGetCurrentV1Raw(): Promise<runtime.ApiResponse<ActivesessionGetCurrentV1Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/activesession/getCurrent`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ActivesessionGetCurrentV1ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve the details about the current activesession
     * Get Current Activesession
     */
    async activesessionGetCurrentV1(): Promise<ActivesessionGetCurrentV1Response> {
        const response = await this.activesessionGetCurrentV1Raw();
        return await response.value();
    }

}
