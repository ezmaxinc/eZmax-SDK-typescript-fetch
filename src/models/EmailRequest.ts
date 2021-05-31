/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.44
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


