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
 * Generic Error Message
 * @export
 * @interface CommonResponseError
 */
export interface CommonResponseError {
    /**
     * More detail about the error
     * @type {string}
     * @memberof CommonResponseError
     */
    sErrorMessage: string;
}

export function CommonResponseErrorFromJSON(json: any): CommonResponseError {
    return CommonResponseErrorFromJSONTyped(json, false);
}

export function CommonResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonResponseError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sErrorMessage': json['sErrorMessage'],
    };
}

export function CommonResponseErrorToJSON(value?: CommonResponseError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sErrorMessage': value.sErrorMessage,
    };
}


