/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.42
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MultilingualApikeyDescription,
    MultilingualApikeyDescriptionFromJSON,
    MultilingualApikeyDescriptionFromJSONTyped,
    MultilingualApikeyDescriptionToJSON,
} from './';

/**
 * An Apikey Object
 * @export
 * @interface ApikeyRequest
 */
export interface ApikeyRequest {
    /**
     * The unique ID of the User
     * @type {number}
     * @memberof ApikeyRequest
     */
    fkiUserID: number;
    /**
     * 
     * @type {MultilingualApikeyDescription}
     * @memberof ApikeyRequest
     */
    objApikeyDescription: MultilingualApikeyDescription;
}

export function ApikeyRequestFromJSON(json: any): ApikeyRequest {
    return ApikeyRequestFromJSONTyped(json, false);
}

export function ApikeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApikeyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiUserID': json['fkiUserID'],
        'objApikeyDescription': MultilingualApikeyDescriptionFromJSON(json['objApikeyDescription']),
    };
}

export function ApikeyRequestToJSON(value?: ApikeyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiUserID': value.fkiUserID,
        'objApikeyDescription': MultilingualApikeyDescriptionToJSON(value.objApikeyDescription),
    };
}


