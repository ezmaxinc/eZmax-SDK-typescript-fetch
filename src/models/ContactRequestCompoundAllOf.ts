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
    ContactinformationsRequestCompound,
    ContactinformationsRequestCompoundFromJSON,
    ContactinformationsRequestCompoundFromJSONTyped,
    ContactinformationsRequestCompoundToJSON,
} from './';

/**
 * 
 * @export
 * @interface ContactRequestCompoundAllOf
 */
export interface ContactRequestCompoundAllOf {
    /**
     * 
     * @type {ContactinformationsRequestCompound}
     * @memberof ContactRequestCompoundAllOf
     */
    objContactinformations: ContactinformationsRequestCompound;
}

export function ContactRequestCompoundAllOfFromJSON(json: any): ContactRequestCompoundAllOf {
    return ContactRequestCompoundAllOfFromJSONTyped(json, false);
}

export function ContactRequestCompoundAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactRequestCompoundAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objContactinformations': ContactinformationsRequestCompoundFromJSON(json['objContactinformations']),
    };
}

export function ContactRequestCompoundAllOfToJSON(value?: ContactRequestCompoundAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objContactinformations': ContactinformationsRequestCompoundToJSON(value.objContactinformations),
    };
}


