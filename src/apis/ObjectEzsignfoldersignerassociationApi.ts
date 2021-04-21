/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.41
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
    EzsignfoldersignerassociationCreateObjectV1Request,
    EzsignfoldersignerassociationCreateObjectV1RequestFromJSON,
    EzsignfoldersignerassociationCreateObjectV1RequestToJSON,
    EzsignfoldersignerassociationCreateObjectV1Response,
    EzsignfoldersignerassociationCreateObjectV1ResponseFromJSON,
    EzsignfoldersignerassociationCreateObjectV1ResponseToJSON,
    EzsignfoldersignerassociationDeleteObjectV1Response,
    EzsignfoldersignerassociationDeleteObjectV1ResponseFromJSON,
    EzsignfoldersignerassociationDeleteObjectV1ResponseToJSON,
    EzsignfoldersignerassociationGetInPersonLoginUrlV1Response,
    EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseFromJSON,
    EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseToJSON,
    EzsignfoldersignerassociationGetObjectV1Response,
    EzsignfoldersignerassociationGetObjectV1ResponseFromJSON,
    EzsignfoldersignerassociationGetObjectV1ResponseToJSON,
} from '../models';

export interface EzsignfoldersignerassociationCreateObjectV1OperationRequest {
    ezsignfoldersignerassociationCreateObjectV1Request: Array<EzsignfoldersignerassociationCreateObjectV1Request>;
}

export interface EzsignfoldersignerassociationDeleteObjectV1Request {
    pkiEzsignfoldersignerassociationID: number;
}

export interface EzsignfoldersignerassociationGetChildrenV1Request {
    pkiEzsignfoldersignerassociationID: number;
}

export interface EzsignfoldersignerassociationGetInPersonLoginUrlV1Request {
    pkiEzsignfoldersignerassociationID: number;
}

export interface EzsignfoldersignerassociationGetObjectV1Request {
    pkiEzsignfoldersignerassociationID: number;
}

/**
 * 
 */
export class ObjectEzsignfoldersignerassociationApi extends runtime.BaseAPI {

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Ezsignfoldersignerassociation
     */
    async ezsignfoldersignerassociationCreateObjectV1Raw(requestParameters: EzsignfoldersignerassociationCreateObjectV1OperationRequest): Promise<runtime.ApiResponse<EzsignfoldersignerassociationCreateObjectV1Response>> {
        if (requestParameters.ezsignfoldersignerassociationCreateObjectV1Request === null || requestParameters.ezsignfoldersignerassociationCreateObjectV1Request === undefined) {
            throw new runtime.RequiredError('ezsignfoldersignerassociationCreateObjectV1Request','Required parameter requestParameters.ezsignfoldersignerassociationCreateObjectV1Request was null or undefined when calling ezsignfoldersignerassociationCreateObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignfoldersignerassociation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.ezsignfoldersignerassociationCreateObjectV1Request.map(EzsignfoldersignerassociationCreateObjectV1RequestToJSON),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignfoldersignerassociationCreateObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Ezsignfoldersignerassociation
     */
    async ezsignfoldersignerassociationCreateObjectV1(requestParameters: EzsignfoldersignerassociationCreateObjectV1OperationRequest): Promise<EzsignfoldersignerassociationCreateObjectV1Response> {
        const response = await this.ezsignfoldersignerassociationCreateObjectV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Ezsignfoldersignerassociation
     */
    async ezsignfoldersignerassociationDeleteObjectV1Raw(requestParameters: EzsignfoldersignerassociationDeleteObjectV1Request): Promise<runtime.ApiResponse<EzsignfoldersignerassociationDeleteObjectV1Response>> {
        if (requestParameters.pkiEzsignfoldersignerassociationID === null || requestParameters.pkiEzsignfoldersignerassociationID === undefined) {
            throw new runtime.RequiredError('pkiEzsignfoldersignerassociationID','Required parameter requestParameters.pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationDeleteObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}`.replace(`{${"pkiEzsignfoldersignerassociationID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignfoldersignerassociationID))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignfoldersignerassociationDeleteObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * Delete an existing Ezsignfoldersignerassociation
     */
    async ezsignfoldersignerassociationDeleteObjectV1(requestParameters: EzsignfoldersignerassociationDeleteObjectV1Request): Promise<EzsignfoldersignerassociationDeleteObjectV1Response> {
        const response = await this.ezsignfoldersignerassociationDeleteObjectV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve an existing Ezsignfoldersignerassociation\'s children IDs
     */
    async ezsignfoldersignerassociationGetChildrenV1Raw(requestParameters: EzsignfoldersignerassociationGetChildrenV1Request): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.pkiEzsignfoldersignerassociationID === null || requestParameters.pkiEzsignfoldersignerassociationID === undefined) {
            throw new runtime.RequiredError('pkiEzsignfoldersignerassociationID','Required parameter requestParameters.pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationGetChildrenV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}/getChildren`.replace(`{${"pkiEzsignfoldersignerassociationID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignfoldersignerassociationID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Retrieve an existing Ezsignfoldersignerassociation\'s children IDs
     */
    async ezsignfoldersignerassociationGetChildrenV1(requestParameters: EzsignfoldersignerassociationGetChildrenV1Request): Promise<void> {
        await this.ezsignfoldersignerassociationGetChildrenV1Raw(requestParameters);
    }

    /**
     * This endpoint returns a Login Url that can be used in a browser or embedded in an I-Frame to allow in person signing.  The signer Login type must be configured as In-Person.
     * Retrieve a Login Url to allow In-Person signing
     */
    async ezsignfoldersignerassociationGetInPersonLoginUrlV1Raw(requestParameters: EzsignfoldersignerassociationGetInPersonLoginUrlV1Request): Promise<runtime.ApiResponse<EzsignfoldersignerassociationGetInPersonLoginUrlV1Response>> {
        if (requestParameters.pkiEzsignfoldersignerassociationID === null || requestParameters.pkiEzsignfoldersignerassociationID === undefined) {
            throw new runtime.RequiredError('pkiEzsignfoldersignerassociationID','Required parameter requestParameters.pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationGetInPersonLoginUrlV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}/getInPersonLoginUrl`.replace(`{${"pkiEzsignfoldersignerassociationID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignfoldersignerassociationID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns a Login Url that can be used in a browser or embedded in an I-Frame to allow in person signing.  The signer Login type must be configured as In-Person.
     * Retrieve a Login Url to allow In-Person signing
     */
    async ezsignfoldersignerassociationGetInPersonLoginUrlV1(requestParameters: EzsignfoldersignerassociationGetInPersonLoginUrlV1Request): Promise<EzsignfoldersignerassociationGetInPersonLoginUrlV1Response> {
        const response = await this.ezsignfoldersignerassociationGetInPersonLoginUrlV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve an existing Ezsignfoldersignerassociation
     */
    async ezsignfoldersignerassociationGetObjectV1Raw(requestParameters: EzsignfoldersignerassociationGetObjectV1Request): Promise<runtime.ApiResponse<EzsignfoldersignerassociationGetObjectV1Response>> {
        if (requestParameters.pkiEzsignfoldersignerassociationID === null || requestParameters.pkiEzsignfoldersignerassociationID === undefined) {
            throw new runtime.RequiredError('pkiEzsignfoldersignerassociationID','Required parameter requestParameters.pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationGetObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}`.replace(`{${"pkiEzsignfoldersignerassociationID"}}`, encodeURIComponent(String(requestParameters.pkiEzsignfoldersignerassociationID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsignfoldersignerassociationGetObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve an existing Ezsignfoldersignerassociation
     */
    async ezsignfoldersignerassociationGetObjectV1(requestParameters: EzsignfoldersignerassociationGetObjectV1Request): Promise<EzsignfoldersignerassociationGetObjectV1Response> {
        const response = await this.ezsignfoldersignerassociationGetObjectV1Raw(requestParameters);
        return await response.value();
    }

}
