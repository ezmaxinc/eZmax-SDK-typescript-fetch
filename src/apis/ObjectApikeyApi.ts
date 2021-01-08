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
    ApikeyCreateObjectV1Request,
    ApikeyCreateObjectV1RequestFromJSON,
    ApikeyCreateObjectV1RequestToJSON,
    ApikeyCreateObjectV1Response,
    ApikeyCreateObjectV1ResponseFromJSON,
    ApikeyCreateObjectV1ResponseToJSON,
} from '../models';

export interface ApikeyCreateObjectV1OperationRequest {
    apikeyCreateObjectV1Request: Array<ApikeyCreateObjectV1Request>;
}

/**
 * 
 */
export class ObjectApikeyApi extends runtime.BaseAPI {

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Apikey
     */
    async apikeyCreateObjectV1Raw(requestParameters: ApikeyCreateObjectV1OperationRequest): Promise<runtime.ApiResponse<ApikeyCreateObjectV1Response>> {
        if (requestParameters.apikeyCreateObjectV1Request === null || requestParameters.apikeyCreateObjectV1Request === undefined) {
            throw new runtime.RequiredError('apikeyCreateObjectV1Request','Required parameter requestParameters.apikeyCreateObjectV1Request was null or undefined when calling apikeyCreateObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/apikey`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.apikeyCreateObjectV1Request.map(ApikeyCreateObjectV1RequestToJSON),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApikeyCreateObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Apikey
     */
    async apikeyCreateObjectV1(requestParameters: ApikeyCreateObjectV1OperationRequest): Promise<ApikeyCreateObjectV1Response> {
        const response = await this.apikeyCreateObjectV1Raw(requestParameters);
        return await response.value();
    }

}
