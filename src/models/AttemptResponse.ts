/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.21
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


