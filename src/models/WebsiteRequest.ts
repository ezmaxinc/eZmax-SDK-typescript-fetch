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
 * A Website Object
 * @export
 * @interface WebsiteRequest
 */
export interface WebsiteRequest {
    /**
     * The unique ID of the Websitetype.
     * 
     * Valid values:
     * 
     * |Value|Description|
     * |-|-|
     * |1|Website|
     * |2|Twitter|
     * |3|Facebook|
     * |4|Survey|
     * @type {number}
     * @memberof WebsiteRequest
     */
    fkiWebsitetypeID: number;
    /**
     * The URL of the website.
     * @type {string}
     * @memberof WebsiteRequest
     */
    sWebsiteAddress: string;
}

export function WebsiteRequestFromJSON(json: any): WebsiteRequest {
    return WebsiteRequestFromJSONTyped(json, false);
}

export function WebsiteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebsiteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiWebsitetypeID': json['fkiWebsitetypeID'],
        'sWebsiteAddress': json['sWebsiteAddress'],
    };
}

export function WebsiteRequestToJSON(value?: WebsiteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiWebsitetypeID': value.fkiWebsitetypeID,
        'sWebsiteAddress': value.sWebsiteAddress,
    };
}


