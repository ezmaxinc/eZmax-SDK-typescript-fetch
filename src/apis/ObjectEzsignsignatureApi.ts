/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.21
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CommonResponseError,
    CommonResponseErrorFromJSON,
    CommonResponseErrorToJSON,
    EzsignsignatureCreateObjectV1Request,
    EzsignsignatureCreateObjectV1RequestFromJSON,
    EzsignsignatureCreateObjectV1RequestToJSON,
    EzsignsignatureCreateObjectV1Response,
    EzsignsignatureCreateObjectV1ResponseFromJSON,
    EzsignsignatureCreateObjectV1ResponseToJSON,
    EzsignsignatureDeleteObjectV1Response,
    EzsignsignatureDeleteObjectV1ResponseFromJSON,
    EzsignsignatureDeleteObjectV1ResponseToJSON,
    EzsignsignatureEditObjectV1Request,
    EzsignsignatureEditObjectV1RequestFromJSON,
    EzsignsignatureEditObjectV1RequestToJSON,
    EzsignsignatureEditObjectV1Response,
    EzsignsignatureEditObjectV1ResponseFromJSON,
    EzsignsignatureEditObjectV1ResponseToJSON,
    EzsignsignatureGetObjectV1Response,
    EzsignsignatureGetObjectV1ResponseFromJSON,
    EzsignsignatureGetObjectV1ResponseToJSON,
} from '../models';

export interface EzsignsignatureCreateObjectV1OperationRequest {
    ezsignsignatureCreateObjectV1Request: Array<EzsignsignatureCreateObjectV1Request>;
}

export interface EzsignsignatureDeleteObjectV1Request {
    pkiEzsignsignatureID: number;
}

export interface EzsignsignatureEditObjectV1OperationRequest {
    pkiEzsignsignatureID: number;
    ezsignsignatureEditObjectV1Request: EzsignsignatureEditObjectV1Request;
}

export interface EzsignsignatureGetObjectGetChildrenV1Request {
    pkiEzsignsignatureID: number;
}

export interface EzsignsignatureGetObjectV1Request {
    pkiEzsignsignatureID: number;
}

/**
 * 
 */
export class ObjectEzsignsignatureApi extends runtime.BaseAPI {

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Ezsignsignature
     */
    async ezsignsignatureCreateObjectV1Raw(requestParameters: EzsignsignatureCreateObjectV1OperationRequest): Promise<runtime.ApiResponse<EzsignsignatureCreateObjectV1Response>> {
        if (requestParameters.ezsignsignatureCreateObjectV1Request === null || requestParameters.ezsignsignatureCreateObjectV1Request === undefined) {
            throw new runtime.RequiredError('ezsignsignatureCreateObjectV1Request','Required parameter requestParameters.ezsignsignatureCreateObjectV1Request was null or undefined when calling ezsignsignatureCreateObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignsignature`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.ezsignsignatureCreateObjectV1Request.map(EzsignsignatureCreateObjectV1RequestToJSON),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignsignatureCreateObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Ezsignsignature
     */
    async ezsignsignatureCreateObjectV1(requestParameters: EzsignsignatureCreateObjectV1OperationRequest): Promise<EzsignsignatureCreateObjectV1Response> {
        const response = await this.ezsignsignatureCreateObjectV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Ezsignsignature
     */
    async ezsignsignatureDeleteObjectV1Raw(requestParameters: EzsignsignatureDeleteObjectV1Request): Promise<runtime.ApiResponse<EzsignsignatureDeleteObjectV1Response>> {
        if (requestParameters.pkiEzsignsignatureID === null || requestParameters.pkiEzsignsignatureID === undefined) {
            throw new runtime.RequiredError('pkiEzsignsignatureID','Required parameter requestParameters.pkiEzsignsignatureID was null or undefined when calling ezsignsignatureDeleteObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignsignature/{pkiEzsignsignatureID}`.replace(`{${"pkiEzsignsignatureID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignsignatureID))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignsignatureDeleteObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * Delete an existing Ezsignsignature
     */
    async ezsignsignatureDeleteObjectV1(requestParameters: EzsignsignatureDeleteObjectV1Request): Promise<EzsignsignatureDeleteObjectV1Response> {
        const response = await this.ezsignsignatureDeleteObjectV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Modify an existing Ezsignsignature
     */
    async ezsignsignatureEditObjectV1Raw(requestParameters: EzsignsignatureEditObjectV1OperationRequest): Promise<runtime.ApiResponse<EzsignsignatureEditObjectV1Response>> {
        if (requestParameters.pkiEzsignsignatureID === null || requestParameters.pkiEzsignsignatureID === undefined) {
            throw new runtime.RequiredError('pkiEzsignsignatureID','Required parameter requestParameters.pkiEzsignsignatureID was null or undefined when calling ezsignsignatureEditObjectV1.');
        }

        if (requestParameters.ezsignsignatureEditObjectV1Request === null || requestParameters.ezsignsignatureEditObjectV1Request === undefined) {
            throw new runtime.RequiredError('ezsignsignatureEditObjectV1Request','Required parameter requestParameters.ezsignsignatureEditObjectV1Request was null or undefined when calling ezsignsignatureEditObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignsignature/{pkiEzsignsignatureID}`.replace(`{${"pkiEzsignsignatureID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignsignatureID))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EzsignsignatureEditObjectV1RequestToJSON(requestParameters.ezsignsignatureEditObjectV1Request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignsignatureEditObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * Modify an existing Ezsignsignature
     */
    async ezsignsignatureEditObjectV1(requestParameters: EzsignsignatureEditObjectV1OperationRequest): Promise<EzsignsignatureEditObjectV1Response> {
        const response = await this.ezsignsignatureEditObjectV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve an existing Ezsignsignature\'s children IDs
     */
    async ezsignsignatureGetObjectGetChildrenV1Raw(requestParameters: EzsignsignatureGetObjectGetChildrenV1Request): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.pkiEzsignsignatureID === null || requestParameters.pkiEzsignsignatureID === undefined) {
            throw new runtime.RequiredError('pkiEzsignsignatureID','Required parameter requestParameters.pkiEzsignsignatureID was null or undefined when calling ezsignsignatureGetObjectGetChildrenV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignsignature/{pkiEzsignsignatureID}/getChildren`.replace(`{${"pkiEzsignsignatureID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignsignatureID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Retrieve an existing Ezsignsignature\'s children IDs
     */
    async ezsignsignatureGetObjectGetChildrenV1(requestParameters: EzsignsignatureGetObjectGetChildrenV1Request): Promise<void> {
        await this.ezsignsignatureGetObjectGetChildrenV1Raw(requestParameters);
    }

    /**
     * Retrieve an existing Ezsignsignature
     */
    async ezsignsignatureGetObjectV1Raw(requestParameters: EzsignsignatureGetObjectV1Request): Promise<runtime.ApiResponse<EzsignsignatureGetObjectV1Response>> {
        if (requestParameters.pkiEzsignsignatureID === null || requestParameters.pkiEzsignsignatureID === undefined) {
            throw new runtime.RequiredError('pkiEzsignsignatureID','Required parameter requestParameters.pkiEzsignsignatureID was null or undefined when calling ezsignsignatureGetObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignsignature/{pkiEzsignsignatureID}`.replace(`{${"pkiEzsignsignatureID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignsignatureID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignsignatureGetObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve an existing Ezsignsignature
     */
    async ezsignsignatureGetObjectV1(requestParameters: EzsignsignatureGetObjectV1Request): Promise<EzsignsignatureGetObjectV1Response> {
        const response = await this.ezsignsignatureGetObjectV1Raw(requestParameters);
        return await response.value();
    }

}