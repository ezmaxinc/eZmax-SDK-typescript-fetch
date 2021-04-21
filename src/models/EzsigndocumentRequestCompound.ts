/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.41
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EzsigndocumentRequest,
    EzsigndocumentRequestFromJSON,
    EzsigndocumentRequestFromJSONTyped,
    EzsigndocumentRequestToJSON,
} from './';

/**
 * An Ezsigndocument Object and children to create a complete structure
 * @export
 * @interface EzsigndocumentRequestCompound
 */
export interface EzsigndocumentRequestCompound {
    /**
     * Indicates where to look for the document binary content.
     * @type {string}
     * @memberof EzsigndocumentRequestCompound
     */
    eEzsigndocumentSource: EzsigndocumentRequestCompoundEEzsigndocumentSourceEnum;
    /**
     * Indicates the format of the document.
     * @type {string}
     * @memberof EzsigndocumentRequestCompound
     */
    eEzsigndocumentFormat: EzsigndocumentRequestCompoundEEzsigndocumentFormatEnum;
    /**
     * The Base64 encoded binary content of the document.
     * 
     * This field is Required when eEzsigndocumentSource = Base64.
     * @type {string}
     * @memberof EzsigndocumentRequestCompound
     */
    sEzsigndocumentBase64?: string;
    /**
     * A reference to a valid Ezsignfolder.
     * 
     * That value is returned after a successful Ezsignfolder Creation.
     * @type {number}
     * @memberof EzsigndocumentRequestCompound
     */
    fkiEzsignfolderID: number;
    /**
     * Represent a Date Time.
     * The timezone is the one configured in the User's profile.
     * @type {string}
     * @memberof EzsigndocumentRequestCompound
     */
    dtEzsigndocumentDuedate: string;
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
     * @memberof EzsigndocumentRequestCompound
     */
    fkiLanguageID: number;
    /**
     * The name of the document that will be presented to Ezsignfoldersignerassociations
     * @type {string}
     * @memberof EzsigndocumentRequestCompound
     */
    sEzsigndocumentName: string;
}

/**
* @export
* @enum {string}
*/
export enum EzsigndocumentRequestCompoundEEzsigndocumentSourceEnum {
    Base64 = 'Base64'
}/**
* @export
* @enum {string}
*/
export enum EzsigndocumentRequestCompoundEEzsigndocumentFormatEnum {
    Pdf = 'Pdf'
}

export function EzsigndocumentRequestCompoundFromJSON(json: any): EzsigndocumentRequestCompound {
    return EzsigndocumentRequestCompoundFromJSONTyped(json, false);
}

export function EzsigndocumentRequestCompoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsigndocumentRequestCompound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eEzsigndocumentSource': json['eEzsigndocumentSource'],
        'eEzsigndocumentFormat': json['eEzsigndocumentFormat'],
        'sEzsigndocumentBase64': !exists(json, 'sEzsigndocumentBase64') ? undefined : json['sEzsigndocumentBase64'],
        'fkiEzsignfolderID': json['fkiEzsignfolderID'],
        'dtEzsigndocumentDuedate': json['dtEzsigndocumentDuedate'],
        'fkiLanguageID': json['fkiLanguageID'],
        'sEzsigndocumentName': json['sEzsigndocumentName'],
    };
}

export function EzsigndocumentRequestCompoundToJSON(value?: EzsigndocumentRequestCompound | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'eEzsigndocumentSource': value.eEzsigndocumentSource,
        'eEzsigndocumentFormat': value.eEzsigndocumentFormat,
        'sEzsigndocumentBase64': value.sEzsigndocumentBase64,
        'fkiEzsignfolderID': value.fkiEzsignfolderID,
        'dtEzsigndocumentDuedate': value.dtEzsigndocumentDuedate,
        'fkiLanguageID': value.fkiLanguageID,
        'sEzsigndocumentName': value.sEzsigndocumentName,
    };
}


