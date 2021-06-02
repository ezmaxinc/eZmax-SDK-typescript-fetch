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
/**
 * A Contact Object
 * @export
 * @interface ContactRequest
 */
export interface ContactRequest {
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
     * @memberof ContactRequest
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
     * @memberof ContactRequest
     */
    fkiLanguageID: number;
    /**
     * The First name of the contact
     * @type {string}
     * @memberof ContactRequest
     */
    sContactFirstname: string;
    /**
     * The Last name of the contact
     * @type {string}
     * @memberof ContactRequest
     */
    sContactLastname: string;
    /**
     * The Company name of the contact
     * @type {string}
     * @memberof ContactRequest
     */
    sContactCompany: string;
    /**
     * The Birth Date of the contact
     * @type {string}
     * @memberof ContactRequest
     */
    dtContactBirthdate?: string;
}

export function ContactRequestFromJSON(json: any): ContactRequest {
    return ContactRequestFromJSONTyped(json, false);
}

export function ContactRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiContacttitleID': json['fkiContacttitleID'],
        'fkiLanguageID': json['fkiLanguageID'],
        'sContactFirstname': json['sContactFirstname'],
        'sContactLastname': json['sContactLastname'],
        'sContactCompany': json['sContactCompany'],
        'dtContactBirthdate': !exists(json, 'dtContactBirthdate') ? undefined : json['dtContactBirthdate'],
    };
}

export function ContactRequestToJSON(value?: ContactRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiContacttitleID': value.fkiContacttitleID,
        'fkiLanguageID': value.fkiLanguageID,
        'sContactFirstname': value.sContactFirstname,
        'sContactLastname': value.sContactLastname,
        'sContactCompany': value.sContactCompany,
        'dtContactBirthdate': value.dtContactBirthdate,
    };
}


