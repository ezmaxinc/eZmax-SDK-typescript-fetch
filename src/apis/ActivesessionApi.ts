/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.15
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
export class ActivesessionApi extends runtime.BaseAPI {

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
