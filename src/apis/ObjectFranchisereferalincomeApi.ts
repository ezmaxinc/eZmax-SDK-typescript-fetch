/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.24
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    FranchisereferalincomeCreateObjectV1Request,
    FranchisereferalincomeCreateObjectV1RequestFromJSON,
    FranchisereferalincomeCreateObjectV1RequestToJSON,
    FranchisereferalincomeCreateObjectV1Response,
    FranchisereferalincomeCreateObjectV1ResponseFromJSON,
    FranchisereferalincomeCreateObjectV1ResponseToJSON,
} from '../models';

export interface FranchisereferalincomeCreateObjectV1OperationRequest {
    franchisereferalincomeCreateObjectV1Request: Array<FranchisereferalincomeCreateObjectV1Request>;
}

/**
 * 
 */
export class ObjectFranchisereferalincomeApi extends runtime.BaseAPI {

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Franchisereferalincome
     */
    async franchisereferalincomeCreateObjectV1Raw(requestParameters: FranchisereferalincomeCreateObjectV1OperationRequest): Promise<runtime.ApiResponse<FranchisereferalincomeCreateObjectV1Response>> {
        if (requestParameters.franchisereferalincomeCreateObjectV1Request === null || requestParameters.franchisereferalincomeCreateObjectV1Request === undefined) {
            throw new runtime.RequiredError('franchisereferalincomeCreateObjectV1Request','Required parameter requestParameters.franchisereferalincomeCreateObjectV1Request was null or undefined when calling franchisereferalincomeCreateObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/franchisereferalincome`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.franchisereferalincomeCreateObjectV1Request.map(FranchisereferalincomeCreateObjectV1RequestToJSON),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FranchisereferalincomeCreateObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Franchisereferalincome
     */
    async franchisereferalincomeCreateObjectV1(requestParameters: FranchisereferalincomeCreateObjectV1OperationRequest): Promise<FranchisereferalincomeCreateObjectV1Response> {
        const response = await this.franchisereferalincomeCreateObjectV1Raw(requestParameters);
        return await response.value();
    }

}
