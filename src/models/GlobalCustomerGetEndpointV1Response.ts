/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.33
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Response for the /1/customer/{pksCustomerCode}/endpoint API Request
 * @export
 * @interface GlobalCustomerGetEndpointV1Response
 */
export interface GlobalCustomerGetEndpointV1Response {
    /**
     * The endpoint's URL
     * @type {string}
     * @memberof GlobalCustomerGetEndpointV1Response
     */
    sEndpointURL: string;
}

export function GlobalCustomerGetEndpointV1ResponseFromJSON(json: any): GlobalCustomerGetEndpointV1Response {
    return GlobalCustomerGetEndpointV1ResponseFromJSONTyped(json, false);
}

export function GlobalCustomerGetEndpointV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalCustomerGetEndpointV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sEndpointURL': json['sEndpointURL'],
    };
}

export function GlobalCustomerGetEndpointV1ResponseToJSON(value?: GlobalCustomerGetEndpointV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sEndpointURL': value.sEndpointURL,
    };
}


