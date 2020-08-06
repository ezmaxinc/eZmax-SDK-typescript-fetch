/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.9
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


