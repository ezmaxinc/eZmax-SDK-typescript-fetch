/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.31
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * An Attempt object
 * @export
 * @interface AttemptResponse
 */
export interface AttemptResponse {
    /**
     * Represent a Date Time.
     * The timezone is the one configured in the User's profile.
     * @type {string}
     * @memberof AttemptResponse
     */
    dtAttemptStart: string;
    /**
     * The Success or Failure message of the attempt when we tried to call the URL to deliver the webhook event.
     * @type {string}
     * @memberof AttemptResponse
     */
    sAttemptResult: string;
    /**
     * The number of second it took to process the webhook or get an error
     * @type {number}
     * @memberof AttemptResponse
     */
    iAttemptDuration: number;
}

export function AttemptResponseFromJSON(json: any): AttemptResponse {
    return AttemptResponseFromJSONTyped(json, false);
}

export function AttemptResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttemptResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dtAttemptStart': json['dtAttemptStart'],
        'sAttemptResult': json['sAttemptResult'],
        'iAttemptDuration': json['iAttemptDuration'],
    };
}

export function AttemptResponseToJSON(value?: AttemptResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dtAttemptStart': value.dtAttemptStart,
        'sAttemptResult': value.sAttemptResult,
        'iAttemptDuration': value.iAttemptDuration,
    };
}


