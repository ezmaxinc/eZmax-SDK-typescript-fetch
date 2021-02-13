/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
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
    GlobalCustomerGetEndpointV1Response,
    GlobalCustomerGetEndpointV1ResponseFromJSON,
    GlobalCustomerGetEndpointV1ResponseToJSON,
} from '../models';

export interface GlobalCustomerGetEndpointV1Request {
    pksCustomerCode: string;
    sInfrastructureproductCode?: GlobalCustomerGetEndpointV1SInfrastructureproductCodeEnum;
}

/**
 * 
 */
export class GlobalCustomerApi extends runtime.BaseAPI {

    /**
     * Retrieve the customer\'s specific server endpoint where to send requests. This will help locate the proper region (ie: sInfrastructureregionCode) and the proper environment (ie: sInfrastructureenvironmenttypeDescription) where the customer\'s data is stored.
     * Get customer endpoint
     */
    async globalCustomerGetEndpointV1Raw(requestParameters: GlobalCustomerGetEndpointV1Request): Promise<runtime.ApiResponse<GlobalCustomerGetEndpointV1Response>> {
        if (requestParameters.pksCustomerCode === null || requestParameters.pksCustomerCode === undefined) {
            throw new runtime.RequiredError('pksCustomerCode','Required parameter requestParameters.pksCustomerCode was null or undefined when calling globalCustomerGetEndpointV1.');
        }

        const queryParameters: any = {};

        if (requestParameters.sInfrastructureproductCode !== undefined) {
            queryParameters['sInfrastructureproductCode'] = requestParameters.sInfrastructureproductCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/customer/{pksCustomerCode}/endpoint`.replace(`{${"pksCustomerCode"}}`, encodeURIComponent(String(requestParameters.pksCustomerCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GlobalCustomerGetEndpointV1ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve the customer\'s specific server endpoint where to send requests. This will help locate the proper region (ie: sInfrastructureregionCode) and the proper environment (ie: sInfrastructureenvironmenttypeDescription) where the customer\'s data is stored.
     * Get customer endpoint
     */
    async globalCustomerGetEndpointV1(requestParameters: GlobalCustomerGetEndpointV1Request): Promise<GlobalCustomerGetEndpointV1Response> {
        const response = await this.globalCustomerGetEndpointV1Raw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GlobalCustomerGetEndpointV1SInfrastructureproductCodeEnum {
    appcluster01 = 'appcluster01',
    ezsignuser = 'ezsignuser'
}