/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.24
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * An Ezsigndocument Object
 * @export
 * @interface EzsigndocumentRequest
 */
export interface EzsigndocumentRequest {
    /**
     * Indicates where to look for the document binary content.
     * @type {string}
     * @memberof EzsigndocumentRequest
     */
    eEzsigndocumentSource: EzsigndocumentRequestEEzsigndocumentSourceEnum;
    /**
     * Indicates the format of the document.
     * @type {string}
     * @memberof EzsigndocumentRequest
     */
    eEzsigndocumentFormat: EzsigndocumentRequestEEzsigndocumentFormatEnum;
    /**
     * The Base64 encoded binary content of the document.
     * 
     * This field is Required when eEzsigndocumentSource = Base64.
     * @type {string}
     * @memberof EzsigndocumentRequest
     */
    sEzsigndocumentBase64?: string;
    /**
     * A reference to a valid Ezsignfolder.
     * 
     * That value is returned after a successful Ezsignfolder Creation.
     * @type {number}
     * @memberof EzsigndocumentRequest
     */
    fkiEzsignfolderID: number;
    /**
     * Represent a Date Time.
     * The timezone is the one configured in the User's profile.
     * @type {string}
     * @memberof EzsigndocumentRequest
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
     * @memberof EzsigndocumentRequest
     */
    fkiLanguageID: number;
    /**
     * The actual file name that will be used when downloading or attaching to an email.
     * @type {string}
     * @memberof EzsigndocumentRequest
     */
    sEzsigndocumentFilename: string;
    /**
     * The name of the document that will be presented to Ezsignfoldersignerassociations
     * @type {string}
     * @memberof EzsigndocumentRequest
     */
    sEzsigndocumentName: string;
}

/**
* @export
* @enum {string}
*/
export enum EzsigndocumentRequestEEzsigndocumentSourceEnum {
    Base64 = 'Base64'
}/**
* @export
* @enum {string}
*/
export enum EzsigndocumentRequestEEzsigndocumentFormatEnum {
    Pdf = 'Pdf'
}

export function EzsigndocumentRequestFromJSON(json: any): EzsigndocumentRequest {
    return EzsigndocumentRequestFromJSONTyped(json, false);
}

export function EzsigndocumentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsigndocumentRequest {
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

export function EzsigndocumentRequestToJSON(value?: EzsigndocumentRequest | null): any {
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


