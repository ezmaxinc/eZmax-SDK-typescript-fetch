/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.37
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ApikeyRequest,
    ApikeyRequestFromJSON,
    ApikeyRequestFromJSONTyped,
    ApikeyRequestToJSON,
    MultilingualApikeyDescription,
    MultilingualApikeyDescriptionFromJSON,
    MultilingualApikeyDescriptionFromJSONTyped,
    MultilingualApikeyDescriptionToJSON,
} from './';

/**
 * An Apikey Object and children to create a complete structure
 * @export
 * @interface ApikeyRequestCompound
 */
export interface ApikeyRequestCompound {
    /**
     * The unique ID of the User
     * @type {number}
     * @memberof ApikeyRequestCompound
     */
    fkiUserID: number;
    /**
     * 
     * @type {MultilingualApikeyDescription}
     * @memberof ApikeyRequestCompound
     */
    objApikeyDescription: MultilingualApikeyDescription;
}

export function ApikeyRequestCompoundFromJSON(json: any): ApikeyRequestCompound {
    return ApikeyRequestCompoundFromJSONTyped(json, false);
}

export function ApikeyRequestCompoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApikeyRequestCompound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiUserID': json['fkiUserID'],
        'objApikeyDescription': MultilingualApikeyDescriptionFromJSON(json['objApikeyDescription']),
    };
}

export function ApikeyRequestCompoundToJSON(value?: ApikeyRequestCompound | null): any {
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


