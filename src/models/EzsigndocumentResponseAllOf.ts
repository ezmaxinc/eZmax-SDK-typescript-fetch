/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.22
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    FieldEEzsigndocumentStep,
    FieldEEzsigndocumentStepFromJSON,
    FieldEEzsigndocumentStepFromJSONTyped,
    FieldEEzsigndocumentStepToJSON,
} from './';

/**
 * 
 * @export
 * @interface EzsigndocumentResponseAllOf
 */
export interface EzsigndocumentResponseAllOf {
    /**
     * The unique ID of the Ezsignfolder
     * @type {number}
     * @memberof EzsigndocumentResponseAllOf
     */
    fkiEzsignfolderID: number;
    /**
     * The maximum date and time at which the document can be signed.
     * @type {string}
     * @memberof EzsigndocumentResponseAllOf
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
     * @memberof EzsigndocumentResponseAllOf
     */
    fkiLanguageID: number;
    /**
     * The actual file name that will be used when downloading or attaching to an email.
     * @type {string}
     * @memberof EzsigndocumentResponseAllOf
     */
    sEzsigndocumentFilename: string;
    /**
     * The name of the document that will be presented to Ezsignfoldersignerassociations
     * @type {string}
     * @memberof EzsigndocumentResponseAllOf
     */
    sEzsigndocumentName: string;
    /**
     * The unique ID of the Ezsigntemplate
     * @type {number}
     * @memberof EzsigndocumentResponseAllOf
     */
    pkiEzsigndocumentID: number;
    /**
     * 
     * @type {FieldEEzsigndocumentStep}
     * @memberof EzsigndocumentResponseAllOf
     */
    eEzsigndocumentStep: FieldEEzsigndocumentStep;
    /**
     * The date and time when the Ezsigndocument was first sent.
     * @type {string}
     * @memberof EzsigndocumentResponseAllOf
     */
    dtEzsigndocumentFirstsend: string;
    /**
     * The date and time when the Ezsigndocument was sent the last time.
     * @type {string}
     * @memberof EzsigndocumentResponseAllOf
     */
    dtEzsigndocumentLastsend: string;
    /**
     * The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
     * @type {number}
     * @memberof EzsigndocumentResponseAllOf
     */
    iEzsigndocumentOrder: number;
    /**
     * The number of pages in the Ezsigndocument.
     * @type {number}
     * @memberof EzsigndocumentResponseAllOf
     */
    iEzsigndocumentPagetotal: number;
    /**
     * The number of signatures that were signed in the document.
     * @type {number}
     * @memberof EzsigndocumentResponseAllOf
     */
    iEzsigndocumentSignaturesigned: number;
    /**
     * The number of total signatures that were requested in the Ezsigndocument.
     * @type {number}
     * @memberof EzsigndocumentResponseAllOf
     */
    iEzsigndocumentSignaturetotal: number;
    /**
     * MD5 Hash of the initial PDF Document before signatures were applied to it.
     * @type {string}
     * @memberof EzsigndocumentResponseAllOf
     */
    sEzsigndocumentMD5initial: string;
    /**
     * MD5 Hash of the final PDF Document after all signatures were applied to it.
     * @type {string}
     * @memberof EzsigndocumentResponseAllOf
     */
    sEzsigndocumentMD5signed: string;
}

export function EzsigndocumentResponseAllOfFromJSON(json: any): EzsigndocumentResponseAllOf {
    return EzsigndocumentResponseAllOfFromJSONTyped(json, false);
}

export function EzsigndocumentResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsigndocumentResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiEzsignfolderID': json['fkiEzsignfolderID'],
        'dtEzsigndocumentDuedate': json['dtEzsigndocumentDuedate'],
        'fkiLanguageID': json['fkiLanguageID'],
        'sEzsigndocumentFilename': json['sEzsigndocumentFilename'],
        'sEzsigndocumentName': json['sEzsigndocumentName'],
        'pkiEzsigndocumentID': json['pkiEzsigndocumentID'],
        'eEzsigndocumentStep': FieldEEzsigndocumentStepFromJSON(json['eEzsigndocumentStep']),
        'dtEzsigndocumentFirstsend': json['dtEzsigndocumentFirstsend'],
        'dtEzsigndocumentLastsend': json['dtEzsigndocumentLastsend'],
        'iEzsigndocumentOrder': json['iEzsigndocumentOrder'],
        'iEzsigndocumentPagetotal': json['iEzsigndocumentPagetotal'],
        'iEzsigndocumentSignaturesigned': json['iEzsigndocumentSignaturesigned'],
        'iEzsigndocumentSignaturetotal': json['iEzsigndocumentSignaturetotal'],
        'sEzsigndocumentMD5initial': json['sEzsigndocumentMD5initial'],
        'sEzsigndocumentMD5signed': json['sEzsigndocumentMD5signed'],
    };
}

export function EzsigndocumentResponseAllOfToJSON(value?: EzsigndocumentResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiEzsignfolderID': value.fkiEzsignfolderID,
        'dtEzsigndocumentDuedate': value.dtEzsigndocumentDuedate,
        'fkiLanguageID': value.fkiLanguageID,
        'sEzsigndocumentFilename': value.sEzsigndocumentFilename,
        'sEzsigndocumentName': value.sEzsigndocumentName,
        'pkiEzsigndocumentID': value.pkiEzsigndocumentID,
        'eEzsigndocumentStep': FieldEEzsigndocumentStepToJSON(value.eEzsigndocumentStep),
        'dtEzsigndocumentFirstsend': value.dtEzsigndocumentFirstsend,
        'dtEzsigndocumentLastsend': value.dtEzsigndocumentLastsend,
        'iEzsigndocumentOrder': value.iEzsigndocumentOrder,
        'iEzsigndocumentPagetotal': value.iEzsigndocumentPagetotal,
        'iEzsigndocumentSignaturesigned': value.iEzsigndocumentSignaturesigned,
        'iEzsigndocumentSignaturetotal': value.iEzsigndocumentSignaturetotal,
        'sEzsigndocumentMD5initial': value.sEzsigndocumentMD5initial,
        'sEzsigndocumentMD5signed': value.sEzsigndocumentMD5signed,
    };
}


