/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.33
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ContactRequest,
    ContactRequestFromJSON,
    ContactRequestFromJSONTyped,
    ContactRequestToJSON,
    ContactRequestCompoundAllOf,
    ContactRequestCompoundAllOfFromJSON,
    ContactRequestCompoundAllOfFromJSONTyped,
    ContactRequestCompoundAllOfToJSON,
    ContactinformationsRequestCompound,
    ContactinformationsRequestCompoundFromJSON,
    ContactinformationsRequestCompoundFromJSONTyped,
    ContactinformationsRequestCompoundToJSON,
} from './';

/**
 * A Contact Object and children to create a complete structure
 * @export
 * @interface ContactRequestCompound
 */
export interface ContactRequestCompound {
    /**
     * 
     * @type {ContactinformationsRequestCompound}
     * @memberof ContactRequestCompound
     */
    objContactinformations: ContactinformationsRequestCompound;
    /**
     * The unique ID of the Contacttitle.
     * 
     * Valid values:
     * 
     * |Value|Description|
     * |-|-|
     * |1|Ms.|
     * |2|Mr.|
     * |4|(Blank)|
     * |5|Me (For Notaries)|
     * @type {number}
     * @memberof ContactRequestCompound
     */
    fkiContacttitleID: number;
    /**
     * The unique ID of the Language.
     * 
     * Valid values:
     * 
     * |Value|Description|
     * |-|-|
     * |1|French|
     * |2|English|
     * @type {number}
     * @memberof ContactRequestCompound
     */
    fkiLanguageID: number;
    /**
     * The First name of the contact
     * @type {string}
     * @memberof ContactRequestCompound
     */
    sContactFirstname: string;
    /**
     * The Last name of the contact
     * @type {string}
     * @memberof ContactRequestCompound
     */
    sContactLastname: string;
    /**
     * The Company name of the contact
     * @type {string}
     * @memberof ContactRequestCompound
     */
    sContactCompany: string;
    /**
     * The Birth Date of the contact
     * @type {string}
     * @memberof ContactRequestCompound
     */
    dtContactBirthdate?: string;
}

export function ContactRequestCompoundFromJSON(json: any): ContactRequestCompound {
    return ContactRequestCompoundFromJSONTyped(json, false);
}

export function ContactRequestCompoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactRequestCompound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objContactinformations': ContactinformationsRequestCompoundFromJSON(json['objContactinformations']),
        'fkiContacttitleID': json['fkiContacttitleID'],
        'fkiLanguageID': json['fkiLanguageID'],
        'sContactFirstname': json['sContactFirstname'],
        'sContactLastname': json['sContactLastname'],
        'sContactCompany': json['sContactCompany'],
        'dtContactBirthdate': !exists(json, 'dtContactBirthdate') ? undefined : json['dtContactBirthdate'],
    };
}

export function ContactRequestCompoundToJSON(value?: ContactRequestCompound | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objContactinformations': ContactinformationsRequestCompoundToJSON(value.objContactinformations),
        'fkiContacttitleID': value.fkiContacttitleID,
        'fkiLanguageID': value.fkiLanguageID,
        'sContactFirstname': value.sContactFirstname,
        'sContactLastname': value.sContactLastname,
        'sContactCompany': value.sContactCompany,
        'dtContactBirthdate': value.dtContactBirthdate,
    };
}


