/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.45
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CommonAudit,
    CommonAuditFromJSON,
    CommonAuditFromJSONTyped,
    CommonAuditToJSON,
    MultilingualApikeyDescription,
    MultilingualApikeyDescriptionFromJSON,
    MultilingualApikeyDescriptionFromJSONTyped,
    MultilingualApikeyDescriptionToJSON,
} from './';

/**
 * An Apikey Object
 * @export
 * @interface ApikeyResponse
 */
export interface ApikeyResponse {
    /**
     * 
     * @type {MultilingualApikeyDescription}
     * @memberof ApikeyResponse
     */
    objApikeyDescription: MultilingualApikeyDescription;
    /**
     * The secret token for the API key.
     * 
     * This will be returned only on creation.
     * @type {string}
     * @memberof ApikeyResponse
     */
    sComputedToken?: string;
    /**
     * The unique ID of the Apikey
     * @type {number}
     * @memberof ApikeyResponse
     */
    pkiApikeyID: number;
    /**
     * 
     * @type {CommonAudit}
     * @memberof ApikeyResponse
     */
    objAudit: CommonAudit;
}

export function ApikeyResponseFromJSON(json: any): ApikeyResponse {
    return ApikeyResponseFromJSONTyped(json, false);
}

export function ApikeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApikeyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objApikeyDescription': MultilingualApikeyDescriptionFromJSON(json['objApikeyDescription']),
        'sComputedToken': !exists(json, 'sComputedToken') ? undefined : json['sComputedToken'],
        'pkiApikeyID': json['pkiApikeyID'],
        'objAudit': CommonAuditFromJSON(json['objAudit']),
    };
}

export function ApikeyResponseToJSON(value?: ApikeyResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objApikeyDescription': MultilingualApikeyDescriptionToJSON(value.objApikeyDescription),
        'sComputedToken': value.sComputedToken,
        'pkiApikeyID': value.pkiApikeyID,
        'objAudit': CommonAuditToJSON(value.objAudit),
    };
}


