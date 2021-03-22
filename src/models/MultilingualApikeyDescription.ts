/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.38
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Description of the API Key
 * @export
 * @interface MultilingualApikeyDescription
 */
export interface MultilingualApikeyDescription {
    /**
     * Value in French
     * @type {string}
     * @memberof MultilingualApikeyDescription
     */
    sApikeyDescription1?: string;
    /**
     * Value in English
     * @type {string}
     * @memberof MultilingualApikeyDescription
     */
    sApikeyDescription2?: string;
}

export function MultilingualApikeyDescriptionFromJSON(json: any): MultilingualApikeyDescription {
    return MultilingualApikeyDescriptionFromJSONTyped(json, false);
}

export function MultilingualApikeyDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultilingualApikeyDescription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sApikeyDescription1': !exists(json, 'sApikeyDescription1') ? undefined : json['sApikeyDescription1'],
        'sApikeyDescription2': !exists(json, 'sApikeyDescription2') ? undefined : json['sApikeyDescription2'],
    };
}

export function MultilingualApikeyDescriptionToJSON(value?: MultilingualApikeyDescription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sApikeyDescription1': value.sApikeyDescription1,
        'sApikeyDescription2': value.sApikeyDescription2,
    };
}


