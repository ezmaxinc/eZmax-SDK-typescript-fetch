/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.23
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
     * The actual file name that will be used when downloading or attaching to an email.
     * @type {string}
     * @memberof EzsigndocumentRequestCompound
     */
    sEzsigndocumentFilename: string;
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
        'sEzsigndocumentFilename': json['sEzsigndocumentFilename'],
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
        'sEzsigndocumentFilename': value.sEzsigndocumentFilename,
        'sEzsigndocumentName': value.sEzsigndocumentName,
    };
}


