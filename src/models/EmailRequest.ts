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
 * A Contact Object
 * @export
 * @interface EmailRequest
 */
export interface EmailRequest {
    /**
     * The unique ID of the Emailtype.
     * 
     * Valid values:
     * 
     * |Value|Description|
     * |-|-|
     * |1|Office|
     * |2|Home|
     * @type {number}
     * @memberof EmailRequest
     */
    fkiEmailtypeID: number;
    /**
     * The email address.
     * @type {string}
     * @memberof EmailRequest
     */
    sEmailAddress: string;
}

export function EmailRequestFromJSON(json: any): EmailRequest {
    return EmailRequestFromJSONTyped(json, false);
}

export function EmailRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiEmailtypeID': json['fkiEmailtypeID'],
        'sEmailAddress': json['sEmailAddress'],
    };
}

export function EmailRequestToJSON(value?: EmailRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiEmailtypeID': value.fkiEmailtypeID,
        'sEmailAddress': value.sEmailAddress,
    };
}


