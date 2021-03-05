/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.32
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CommonGetAutocompleteV1Response,
    CommonGetAutocompleteV1ResponseFromJSON,
    CommonGetAutocompleteV1ResponseToJSON,
} from '../models';

export interface FranchisebrokerGetAutocompleteV1Request {
    sSelector: FranchisebrokerGetAutocompleteV1SSelectorEnum;
    sQuery?: string;
}

/**
 * 
 */
export class ObjectFranchisebrokerApi extends runtime.BaseAPI {

    /**
     * Get the list of Franchisebrokers to be used in a dropdown or autocomplete control.
     * Retrieve Franchisebrokers and IDs
     */
    async franchisebrokerGetAutocompleteV1Raw(requestParameters: FranchisebrokerGetAutocompleteV1Request): Promise<runtime.ApiResponse<CommonGetAutocompleteV1Response>> {
        if (requestParameters.sSelector === null || requestParameters.sSelector === undefined) {
            throw new runtime.RequiredError('sSelector','Required parameter requestParameters.sSelector was null or undefined when calling franchisebrokerGetAutocompleteV1.');
        }

        const queryParameters: any = {};

        if (requestParameters.sQuery !== undefined) {
            queryParameters['sQuery'] = requestParameters.sQuery;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/object/franchisebroker/getAutocomplete/{sSelector}`.replace(`{${"sSelector"}}`, encodeURIComponent(String(requestParameters.sSelector))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CommonGetAutocompleteV1ResponseFromJSON(jsonValue));
    }

    /**
     * Get the list of Franchisebrokers to be used in a dropdown or autocomplete control.
     * Retrieve Franchisebrokers and IDs
     */
    async franchisebrokerGetAutocompleteV1(requestParameters: FranchisebrokerGetAutocompleteV1Request): Promise<CommonGetAutocompleteV1Response> {
        const response = await this.franchisebrokerGetAutocompleteV1Raw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum FranchisebrokerGetAutocompleteV1SSelectorEnum {
    Active = 'Active',
    All = 'All'
}
