/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.22
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
    EzsigndocumentApplyEzsigntemplateV1Request,
    EzsigndocumentApplyEzsigntemplateV1RequestFromJSON,
    EzsigndocumentApplyEzsigntemplateV1RequestToJSON,
    EzsigndocumentApplyEzsigntemplateV1Response,
    EzsigndocumentApplyEzsigntemplateV1ResponseFromJSON,
    EzsigndocumentApplyEzsigntemplateV1ResponseToJSON,
    EzsigndocumentCreateObjectV1Request,
    EzsigndocumentCreateObjectV1RequestFromJSON,
    EzsigndocumentCreateObjectV1RequestToJSON,
    EzsigndocumentCreateObjectV1Response,
    EzsigndocumentCreateObjectV1ResponseFromJSON,
    EzsigndocumentCreateObjectV1ResponseToJSON,
    EzsigndocumentDeleteObjectV1Response,
    EzsigndocumentDeleteObjectV1ResponseFromJSON,
    EzsigndocumentDeleteObjectV1ResponseToJSON,
    EzsigndocumentEditObjectV1Request,
    EzsigndocumentEditObjectV1RequestFromJSON,
    EzsigndocumentEditObjectV1RequestToJSON,
    EzsigndocumentEditObjectV1Response,
    EzsigndocumentEditObjectV1ResponseFromJSON,
    EzsigndocumentEditObjectV1ResponseToJSON,
    EzsigndocumentGetDownloadUrlV1Response,
    EzsigndocumentGetDownloadUrlV1ResponseFromJSON,
    EzsigndocumentGetDownloadUrlV1ResponseToJSON,
    EzsigndocumentGetObjectV1Response,
    EzsigndocumentGetObjectV1ResponseFromJSON,
    EzsigndocumentGetObjectV1ResponseToJSON,
} from '../models';

export interface EzsigndocumentApplyEzsigntemplateV1OperationRequest {
    pkiEzsigndocumentID: number;
    ezsigndocumentApplyEzsigntemplateV1Request: EzsigndocumentApplyEzsigntemplateV1Request;
}

export interface EzsigndocumentCreateObjectV1OperationRequest {
    ezsigndocumentCreateObjectV1Request: Array<EzsigndocumentCreateObjectV1Request>;
}

export interface EzsigndocumentDeleteObjectV1Request {
    pkiEzsigndocumentID: number;
}

export interface EzsigndocumentEditObjectV1OperationRequest {
    pkiEzsigndocumentID: number;
    ezsigndocumentEditObjectV1Request: EzsigndocumentEditObjectV1Request;
}

export interface EzsigndocumentGetDownloadUrlV1Request {
    pkiEzsigndocumentID: number;
    eDocumentType: EzsigndocumentGetDownloadUrlV1EDocumentTypeEnum;
}

export interface EzsigndocumentGetObjectGetChildrenV1Request {
    pkiEzsigndocumentID: number;
}

export interface EzsigndocumentGetObjectV1Request {
    pkiEzsigndocumentID: number;
}

/**
 * 
 */
export class ObjectEzsigndocumentApi extends runtime.BaseAPI {

    /**
     * This endpoint applies a predefined template to the ezsign document. This allows to automatically apply all the form and signature fields on a document in a single step.  The document must not already have fields otherwise an error will be returned.
     * Apply an Ezsign Template to the Ezsigndocument.
     */
    async ezsigndocumentApplyEzsigntemplateV1Raw(requestParameters: EzsigndocumentApplyEzsigntemplateV1OperationRequest): Promise<runtime.ApiResponse<EzsigndocumentApplyEzsigntemplateV1Response>> {
        if (requestParameters.pkiEzsigndocumentID === null || requestParameters.pkiEzsigndocumentID === undefined) {
            throw new runtime.RequiredError('pkiEzsigndocumentID','Required parameter requestParameters.pkiEzsigndocumentID was null or undefined when calling ezsigndocumentApplyEzsigntemplateV1.');
        }

        if (requestParameters.ezsigndocumentApplyEzsigntemplateV1Request === null || requestParameters.ezsigndocumentApplyEzsigntemplateV1Request === undefined) {
            throw new runtime.RequiredError('ezsigndocumentApplyEzsigntemplateV1Request','Required parameter requestParameters.ezsigndocumentApplyEzsigntemplateV1Request was null or undefined when calling ezsigndocumentApplyEzsigntemplateV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsigndocument/{pkiEzsigndocumentID}/applyezsigntemplate`.replace(`{${"pkiEzsigndocumentID"}}`, encodeURIComponent(String(requestParameters.pkiEzsigndocumentID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EzsigndocumentApplyEzsigntemplateV1RequestToJSON(requestParameters.ezsigndocumentApplyEzsigntemplateV1Request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsigndocumentApplyEzsigntemplateV1ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint applies a predefined template to the ezsign document. This allows to automatically apply all the form and signature fields on a document in a single step.  The document must not already have fields otherwise an error will be returned.
     * Apply an Ezsign Template to the Ezsigndocument.
     */
    async ezsigndocumentApplyEzsigntemplateV1(requestParameters: EzsigndocumentApplyEzsigntemplateV1OperationRequest): Promise<EzsigndocumentApplyEzsigntemplateV1Response> {
        const response = await this.ezsigndocumentApplyEzsigntemplateV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Ezsigndocument
     */
    async ezsigndocumentCreateObjectV1Raw(requestParameters: EzsigndocumentCreateObjectV1OperationRequest): Promise<runtime.ApiResponse<EzsigndocumentCreateObjectV1Response>> {
        if (requestParameters.ezsigndocumentCreateObjectV1Request === null || requestParameters.ezsigndocumentCreateObjectV1Request === undefined) {
            throw new runtime.RequiredError('ezsigndocumentCreateObjectV1Request','Required parameter requestParameters.ezsigndocumentCreateObjectV1Request was null or undefined when calling ezsigndocumentCreateObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsigndocument`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.ezsigndocumentCreateObjectV1Request.map(EzsigndocumentCreateObjectV1RequestToJSON),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsigndocumentCreateObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * Create a new Ezsigndocument
     */
    async ezsigndocumentCreateObjectV1(requestParameters: EzsigndocumentCreateObjectV1OperationRequest): Promise<EzsigndocumentCreateObjectV1Response> {
        const response = await this.ezsigndocumentCreateObjectV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Ezsigndocument
     */
    async ezsigndocumentDeleteObjectV1Raw(requestParameters: EzsigndocumentDeleteObjectV1Request): Promise<runtime.ApiResponse<EzsigndocumentDeleteObjectV1Response>> {
        if (requestParameters.pkiEzsigndocumentID === null || requestParameters.pkiEzsigndocumentID === undefined) {
            throw new runtime.RequiredError('pkiEzsigndocumentID','Required parameter requestParameters.pkiEzsigndocumentID was null or undefined when calling ezsigndocumentDeleteObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsigndocument/{pkiEzsigndocumentID}`.replace(`{${"pkiEzsigndocumentID"}}`, encodeURIComponent(String(requestParameters.pkiEzsigndocumentID))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsigndocumentDeleteObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * Delete an existing Ezsigndocument
     */
    async ezsigndocumentDeleteObjectV1(requestParameters: EzsigndocumentDeleteObjectV1Request): Promise<EzsigndocumentDeleteObjectV1Response> {
        const response = await this.ezsigndocumentDeleteObjectV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Modify an existing Ezsigndocument
     */
    async ezsigndocumentEditObjectV1Raw(requestParameters: EzsigndocumentEditObjectV1OperationRequest): Promise<runtime.ApiResponse<EzsigndocumentEditObjectV1Response>> {
        if (requestParameters.pkiEzsigndocumentID === null || requestParameters.pkiEzsigndocumentID === undefined) {
            throw new runtime.RequiredError('pkiEzsigndocumentID','Required parameter requestParameters.pkiEzsigndocumentID was null or undefined when calling ezsigndocumentEditObjectV1.');
        }

        if (requestParameters.ezsigndocumentEditObjectV1Request === null || requestParameters.ezsigndocumentEditObjectV1Request === undefined) {
            throw new runtime.RequiredError('ezsigndocumentEditObjectV1Request','Required parameter requestParameters.ezsigndocumentEditObjectV1Request was null or undefined when calling ezsigndocumentEditObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsigndocument/{pkiEzsigndocumentID}`.replace(`{${"pkiEzsigndocumentID"}}`, encodeURIComponent(String(requestParameters.pkiEzsigndocumentID))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EzsigndocumentEditObjectV1RequestToJSON(requestParameters.ezsigndocumentEditObjectV1Request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsigndocumentEditObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * Modify an existing Ezsigndocument
     */
    async ezsigndocumentEditObjectV1(requestParameters: EzsigndocumentEditObjectV1OperationRequest): Promise<EzsigndocumentEditObjectV1Response> {
        const response = await this.ezsigndocumentEditObjectV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint returns URLs to different files that can be downloaded during the signing process.  These links will expire after 5 minutes so the download of the file should be made soon after retrieving the link.
     * Retrieve a URL to download documents.
     */
    async ezsigndocumentGetDownloadUrlV1Raw(requestParameters: EzsigndocumentGetDownloadUrlV1Request): Promise<runtime.ApiResponse<EzsigndocumentGetDownloadUrlV1Response>> {
        if (requestParameters.pkiEzsigndocumentID === null || requestParameters.pkiEzsigndocumentID === undefined) {
            throw new runtime.RequiredError('pkiEzsigndocumentID','Required parameter requestParameters.pkiEzsigndocumentID was null or undefined when calling ezsigndocumentGetDownloadUrlV1.');
        }

        if (requestParameters.eDocumentType === null || requestParameters.eDocumentType === undefined) {
            throw new runtime.RequiredError('eDocumentType','Required parameter requestParameters.eDocumentType was null or undefined when calling ezsigndocumentGetDownloadUrlV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsigndocument/{pkiEzsigndocumentID}/getDownloadUrl/{eDocumentType}`.replace(`{${"pkiEzsigndocumentID"}}`, encodeURIComponent(String(requestParameters.pkiEzsigndocumentID))).replace(`{${"eDocumentType"}}`, encodeURIComponent(String(requestParameters.eDocumentType))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsigndocumentGetDownloadUrlV1ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns URLs to different files that can be downloaded during the signing process.  These links will expire after 5 minutes so the download of the file should be made soon after retrieving the link.
     * Retrieve a URL to download documents.
     */
    async ezsigndocumentGetDownloadUrlV1(requestParameters: EzsigndocumentGetDownloadUrlV1Request): Promise<EzsigndocumentGetDownloadUrlV1Response> {
        const response = await this.ezsigndocumentGetDownloadUrlV1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve an existing Ezsigndocument\'s children IDs
     */
    async ezsigndocumentGetObjectGetChildrenV1Raw(requestParameters: EzsigndocumentGetObjectGetChildrenV1Request): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.pkiEzsigndocumentID === null || requestParameters.pkiEzsigndocumentID === undefined) {
            throw new runtime.RequiredError('pkiEzsigndocumentID','Required parameter requestParameters.pkiEzsigndocumentID was null or undefined when calling ezsigndocumentGetObjectGetChildrenV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsigndocument/{pkiEzsigndocumentID}/getChildren`.replace(`{${"pkiEzsigndocumentID"}}`, encodeURIComponent(String(requestParameters.pkiEzsigndocumentID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Retrieve an existing Ezsigndocument\'s children IDs
     */
    async ezsigndocumentGetObjectGetChildrenV1(requestParameters: EzsigndocumentGetObjectGetChildrenV1Request): Promise<void> {
        await this.ezsigndocumentGetObjectGetChildrenV1Raw(requestParameters);
    }

    /**
     * Retrieve an existing Ezsigndocument
     */
    async ezsigndocumentGetObjectV1Raw(requestParameters: EzsigndocumentGetObjectV1Request): Promise<runtime.ApiResponse<EzsigndocumentGetObjectV1Response>> {
        if (requestParameters.pkiEzsigndocumentID === null || requestParameters.pkiEzsigndocumentID === undefined) {
            throw new runtime.RequiredError('pkiEzsigndocumentID','Required parameter requestParameters.pkiEzsigndocumentID was null or undefined when calling ezsigndocumentGetObjectV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/ezsigndocument/{pkiEzsigndocumentID}`.replace(`{${"pkiEzsigndocumentID"}}`, encodeURIComponent(String(requestParameters.pkiEzsigndocumentID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EzsigndocumentGetObjectV1ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve an existing Ezsigndocument
     */
    async ezsigndocumentGetObjectV1(requestParameters: EzsigndocumentGetObjectV1Request): Promise<EzsigndocumentGetObjectV1Response> {
        const response = await this.ezsigndocumentGetObjectV1Raw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum EzsigndocumentGetDownloadUrlV1EDocumentTypeEnum {
    Initial = 'Initial',
    Signed = 'Signed',
    Proof = 'Proof',
    Proofdocument = 'Proofdocument'
}
