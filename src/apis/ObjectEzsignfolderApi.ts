/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.46
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
    EzsignfolderCreateObjectV1Request,
    EzsignfolderCreateObjectV1RequestFromJSON,
    EzsignfolderCreateObjectV1RequestToJSON,
    EzsignfolderCreateObjectV1Response,
    EzsignfolderCreateObjectV1ResponseFromJSON,
    EzsignfolderCreateObjectV1ResponseToJSON,
    EzsignfolderDeleteObjectV1Response,
    EzsignfolderDeleteObjectV1ResponseFromJSON,
    EzsignfolderDeleteObjectV1ResponseToJSON,
    EzsignfolderGetObjectV1Response,
    EzsignfolderGetObjectV1ResponseFromJSON,
    EzsignfolderGetObjectV1ResponseToJSON,
    EzsignfolderSendV1Request,
    EzsignfolderSendV1RequestFromJSON,
    EzsignfolderSendV1RequestToJSON,
    EzsignfolderSendV1Response,
    EzsignfolderSendV1ResponseFromJSON,
    EzsignfolderSendV1ResponseToJSON,
} from '../models';

export interface EzsignfolderCreateObjectV1OperationRequest {
    ezsignfolderCreateObjectV1Request: Array<EzsignfolderCreateObjectV1Request>;
}

export interface EzsignfolderDeleteObjectV1Request {
    pkiEzsignfolderID: number;
}

export interface EzsignfolderGetChildrenV1Request {
    pkiEzsignfolderID: number;
}

export interface EzsignfolderGetObjectV1Request {
    pkiEzsignfolderID: number;
}

export interface EzsignfolderSendV1OperationRequest {
    pkiEzsignfolderID: number;
    ezsignfolderSendV1Request: EzsignfolderSendV1Request;
}

/**
 * 
 */
export class ObjectEzsignfolderApi extends runtime.BaseAPI {

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Ezsignfolder
     */
    async ezsignfolderCreateObjectV1Raw(requestParameters: EzsignfolderCreateObjectV1OperationRequest): Promise<runtime.ApiResponse<EzsignfolderCreateObjectV1Response>> {
        if (requestParameters.ezsignfolderCreateObjectV1Request === null || requestParameters.ezsignfolderCreateObjectV1Request === undefined) {
            throw new runtime.RequiredError('ezsignfolderCreateObjectV1Request','Required parameter requestParameters.ezsignfolderCreateObjectV1Request was null or undefined when calling ezsignfolderCreateObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignfolder`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.ezsignfolderCreateObjectV1Request.map(EzsignfolderCreateObjectV1RequestToJSON),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignfolderCreateObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Ezsignfolder
     */
    async ezsignfolderCreateObjectV1(requestParameters: EzsignfolderCreateObjectV1OperationRequest): Promise<EzsignfolderCreateObjectV1Response> {
        const response = await this.ezsignfolderCreateObjectV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Ezsignfolder
     */
    async ezsignfolderDeleteObjectV1Raw(requestParameters: EzsignfolderDeleteObjectV1Request): Promise<runtime.ApiResponse<EzsignfolderDeleteObjectV1Response>> {
        if (requestParameters.pkiEzsignfolderID === null || requestParameters.pkiEzsignfolderID === undefined) {
            throw new runtime.RequiredError('pkiEzsignfolderID','Required parameter requestParameters.pkiEzsignfolderID was null or undefined when calling ezsignfolderDeleteObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignfolder/{pkiEzsignfolderID}`.replace(`{${"pkiEzsignfolderID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignfolderID))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignfolderDeleteObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * Delete an existing Ezsignfolder
     */
    async ezsignfolderDeleteObjectV1(requestParameters: EzsignfolderDeleteObjectV1Request): Promise<EzsignfolderDeleteObjectV1Response> {
        const response = await this.ezsignfolderDeleteObjectV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve an existing Ezsignfolder\'s children IDs
     */
    async ezsignfolderGetChildrenV1Raw(requestParameters: EzsignfolderGetChildrenV1Request): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.pkiEzsignfolderID === null || requestParameters.pkiEzsignfolderID === undefined) {
            throw new runtime.RequiredError('pkiEzsignfolderID','Required parameter requestParameters.pkiEzsignfolderID was null or undefined when calling ezsignfolderGetChildrenV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignfolder/{pkiEzsignfolderID}/getChildren`.replace(`{${"pkiEzsignfolderID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignfolderID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Retrieve an existing Ezsignfolder\'s children IDs
     */
    async ezsignfolderGetChildrenV1(requestParameters: EzsignfolderGetChildrenV1Request): Promise<void> {
        await this.ezsignfolderGetChildrenV1Raw(requestParameters);
    }

    /**
     * Retrieve an existing Ezsignfolder
     */
    async ezsignfolderGetObjectV1Raw(requestParameters: EzsignfolderGetObjectV1Request): Promise<runtime.ApiResponse<EzsignfolderGetObjectV1Response>> {
        if (requestParameters.pkiEzsignfolderID === null || requestParameters.pkiEzsignfolderID === undefined) {
            throw new runtime.RequiredError('pkiEzsignfolderID','Required parameter requestParameters.pkiEzsignfolderID was null or undefined when calling ezsignfolderGetObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignfolder/{pkiEzsignfolderID}`.replace(`{${"pkiEzsignfolderID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignfolderID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignfolderGetObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve an existing Ezsignfolder
     */
    async ezsignfolderGetObjectV1(requestParameters: EzsignfolderGetObjectV1Request): Promise<EzsignfolderGetObjectV1Response> {
        const response = await this.ezsignfolderGetObjectV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Send the Ezsignfolder to the signatories for signature
     */
    async ezsignfolderSendV1Raw(requestParameters: EzsignfolderSendV1OperationRequest): Promise<runtime.ApiResponse<EzsignfolderSendV1Response>> {
        if (requestParameters.pkiEzsignfolderID === null || requestParameters.pkiEzsignfolderID === undefined) {
            throw new runtime.RequiredError('pkiEzsignfolderID','Required parameter requestParameters.pkiEzsignfolderID was null or undefined when calling ezsignfolderSendV1.');
        }

        if (requestParameters.ezsignfolderSendV1Request === null || requestParameters.ezsignfolderSendV1Request === undefined) {
            throw new runtime.RequiredError('ezsignfolderSendV1Request','Required parameter requestParameters.ezsignfolderSendV1Request was null or undefined when calling ezsignfolderSendV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignfolder/{pkiEzsignfolderID}/send`.replace(`{${"pkiEzsignfolderID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignfolderID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EzsignfolderSendV1RequestToJSON(requestParameters.ezsignfolderSendV1Request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignfolderSendV1ResponseFromJSON(jsonValue));
    }

    /**
     * Send the Ezsignfolder to the signatories for signature
     */
    async ezsignfolderSendV1(requestParameters: EzsignfolderSendV1OperationRequest): Promise<EzsignfolderSendV1Response> {
        const response = await this.ezsignfolderSendV1Raw(requestParameters);
        return await response.value();
    }

}
