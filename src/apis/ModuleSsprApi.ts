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
    SsprResetPasswordRequestV1Request,
    SsprResetPasswordRequestV1RequestFromJSON,
    SsprResetPasswordRequestV1RequestToJSON,
    SsprResetPasswordV1Request,
    SsprResetPasswordV1RequestFromJSON,
    SsprResetPasswordV1RequestToJSON,
    SsprSendUsernamesV1Request,
    SsprSendUsernamesV1RequestFromJSON,
    SsprSendUsernamesV1RequestToJSON,
    SsprUnlockAccountRequestV1Request,
    SsprUnlockAccountRequestV1RequestFromJSON,
    SsprUnlockAccountRequestV1RequestToJSON,
    SsprUnlockAccountV1Request,
    SsprUnlockAccountV1RequestFromJSON,
    SsprUnlockAccountV1RequestToJSON,
    SsprValidateTokenV1Request,
    SsprValidateTokenV1RequestFromJSON,
    SsprValidateTokenV1RequestToJSON,
} from '../models';

export interface SsprResetPasswordRequestV1OperationRequest {
    ssprResetPasswordRequestV1Request: SsprResetPasswordRequestV1Request;
}

export interface SsprResetPasswordV1OperationRequest {
    ssprResetPasswordV1Request: SsprResetPasswordV1Request;
}

export interface SsprSendUsernamesV1OperationRequest {
    ssprSendUsernamesV1Request: SsprSendUsernamesV1Request;
}

export interface SsprUnlockAccountRequestV1OperationRequest {
    ssprUnlockAccountRequestV1Request: SsprUnlockAccountRequestV1Request;
}

export interface SsprUnlockAccountV1OperationRequest {
    ssprUnlockAccountV1Request: SsprUnlockAccountV1Request;
}

export interface SsprValidateTokenV1OperationRequest {
    ssprValidateTokenV1Request: SsprValidateTokenV1Request;
}

/**
 * 
 */
export class ModuleSsprApi extends runtime.BaseAPI {

    /**
     * This endpoint sends an email with a link to reset the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * Reset Password Request
     */
    async ssprResetPasswordRequestV1Raw(requestParameters: SsprResetPasswordRequestV1OperationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ssprResetPasswordRequestV1Request === null || requestParameters.ssprResetPasswordRequestV1Request === undefined) {
            throw new runtime.RequiredError('ssprResetPasswordRequestV1Request','Required parameter requestParameters.ssprResetPasswordRequestV1Request was null or undefined when calling ssprResetPasswordRequestV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/module/sspr/resetPasswordRequest`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SsprResetPasswordRequestV1RequestToJSON(requestParameters.ssprResetPasswordRequestV1Request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint sends an email with a link to reset the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * Reset Password Request
     */
    async ssprResetPasswordRequestV1(requestParameters: SsprResetPasswordRequestV1OperationRequest): Promise<void> {
        await this.ssprResetPasswordRequestV1Raw(requestParameters);
    }

    /**
     * This endpoint resets the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * Reset Password
     */
    async ssprResetPasswordV1Raw(requestParameters: SsprResetPasswordV1OperationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ssprResetPasswordV1Request === null || requestParameters.ssprResetPasswordV1Request === undefined) {
            throw new runtime.RequiredError('ssprResetPasswordV1Request','Required parameter requestParameters.ssprResetPasswordV1Request was null or undefined when calling ssprResetPasswordV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/module/sspr/resetPassword`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SsprResetPasswordV1RequestToJSON(requestParameters.ssprResetPasswordV1Request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint resets the user\'s password.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * Reset Password
     */
    async ssprResetPasswordV1(requestParameters: SsprResetPasswordV1OperationRequest): Promise<void> {
        await this.ssprResetPasswordV1Raw(requestParameters);
    }

    /**
     * This endpoint returns an email with the username(s) matching the email address provided in case of forgotten username
     * Send username(s)
     */
    async ssprSendUsernamesV1Raw(requestParameters: SsprSendUsernamesV1OperationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ssprSendUsernamesV1Request === null || requestParameters.ssprSendUsernamesV1Request === undefined) {
            throw new runtime.RequiredError('ssprSendUsernamesV1Request','Required parameter requestParameters.ssprSendUsernamesV1Request was null or undefined when calling ssprSendUsernamesV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/module/sspr/sendUsernames`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SsprSendUsernamesV1RequestToJSON(requestParameters.ssprSendUsernamesV1Request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint returns an email with the username(s) matching the email address provided in case of forgotten username
     * Send username(s)
     */
    async ssprSendUsernamesV1(requestParameters: SsprSendUsernamesV1OperationRequest): Promise<void> {
        await this.ssprSendUsernamesV1Raw(requestParameters);
    }

    /**
     * This endpoint sends an email with a link to unlock the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * Unlock Account Request
     */
    async ssprUnlockAccountRequestV1Raw(requestParameters: SsprUnlockAccountRequestV1OperationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ssprUnlockAccountRequestV1Request === null || requestParameters.ssprUnlockAccountRequestV1Request === undefined) {
            throw new runtime.RequiredError('ssprUnlockAccountRequestV1Request','Required parameter requestParameters.ssprUnlockAccountRequestV1Request was null or undefined when calling ssprUnlockAccountRequestV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/module/sspr/unlockAccountRequest`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SsprUnlockAccountRequestV1RequestToJSON(requestParameters.ssprUnlockAccountRequestV1Request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint sends an email with a link to unlock the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * Unlock Account Request
     */
    async ssprUnlockAccountRequestV1(requestParameters: SsprUnlockAccountRequestV1OperationRequest): Promise<void> {
        await this.ssprUnlockAccountRequestV1Raw(requestParameters);
    }

    /**
     * This endpoint unlocks the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * Unlock Account
     */
    async ssprUnlockAccountV1Raw(requestParameters: SsprUnlockAccountV1OperationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ssprUnlockAccountV1Request === null || requestParameters.ssprUnlockAccountV1Request === undefined) {
            throw new runtime.RequiredError('ssprUnlockAccountV1Request','Required parameter requestParameters.ssprUnlockAccountV1Request was null or undefined when calling ssprUnlockAccountV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/module/sspr/unlockAccount`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SsprUnlockAccountV1RequestToJSON(requestParameters.ssprUnlockAccountV1Request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint unlocks the user account.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * Unlock Account
     */
    async ssprUnlockAccountV1(requestParameters: SsprUnlockAccountV1OperationRequest): Promise<void> {
        await this.ssprUnlockAccountV1Raw(requestParameters);
    }

    /**
     * This endpoint validates if a Token is valid and not expired.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * Validate Token
     */
    async ssprValidateTokenV1Raw(requestParameters: SsprValidateTokenV1OperationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ssprValidateTokenV1Request === null || requestParameters.ssprValidateTokenV1Request === undefined) {
            throw new runtime.RequiredError('ssprValidateTokenV1Request','Required parameter requestParameters.ssprValidateTokenV1Request was null or undefined when calling ssprValidateTokenV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/module/sspr/validateToken`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SsprValidateTokenV1RequestToJSON(requestParameters.ssprValidateTokenV1Request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint validates if a Token is valid and not expired.  sEmailAddress must be set if eUserTypeSSPR = EzsignUser  sUserLoginname must be set if eUserTypeSSPR = Native
     * Validate Token
     */
    async ssprValidateTokenV1(requestParameters: SsprValidateTokenV1OperationRequest): Promise<void> {
        await this.ssprValidateTokenV1Raw(requestParameters);
    }

}
