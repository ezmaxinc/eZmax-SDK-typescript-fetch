/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.40
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CommonAudit,
    CommonAuditFromJSON,
    CommonAuditFromJSONTyped,
    CommonAuditToJSON,
    EzsigndocumentResponseAllOf,
    EzsigndocumentResponseAllOfFromJSON,
    EzsigndocumentResponseAllOfFromJSONTyped,
    EzsigndocumentResponseAllOfToJSON,
    FieldEEzsigndocumentStep,
    FieldEEzsigndocumentStepFromJSON,
    FieldEEzsigndocumentStepFromJSONTyped,
    FieldEEzsigndocumentStepToJSON,
} from './';

/**
 * An Ezsigndocument Object
 * @export
 * @interface EzsigndocumentResponse
 */
export interface EzsigndocumentResponse {
    /**
     * The unique ID of the Ezsignfolder
     * @type {number}
     * @memberof EzsigndocumentResponse
     */
    fkiEzsignfolderID: number;
    /**
     * The maximum date and time at which the document can be signed.
     * @type {string}
     * @memberof EzsigndocumentResponse
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
     * @memberof EzsigndocumentResponse
     */
    fkiLanguageID: number;
    /**
     * The name of the document that will be presented to Ezsignfoldersignerassociations
     * @type {string}
     * @memberof EzsigndocumentResponse
     */
    sEzsigndocumentName: string;
    /**
     * The unique ID of the Ezsigntemplate
     * @type {number}
     * @memberof EzsigndocumentResponse
     */
    pkiEzsigndocumentID: number;
    /**
     * 
     * @type {FieldEEzsigndocumentStep}
     * @memberof EzsigndocumentResponse
     */
    eEzsigndocumentStep: FieldEEzsigndocumentStep;
    /**
     * The date and time when the Ezsigndocument was first sent.
     * @type {string}
     * @memberof EzsigndocumentResponse
     */
    dtEzsigndocumentFirstsend: string;
    /**
     * The date and time when the Ezsigndocument was sent the last time.
     * @type {string}
     * @memberof EzsigndocumentResponse
     */
    dtEzsigndocumentLastsend: string;
    /**
     * The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
     * @type {number}
     * @memberof EzsigndocumentResponse
     */
    iEzsigndocumentOrder: number;
    /**
     * The number of pages in the Ezsigndocument.
     * @type {number}
     * @memberof EzsigndocumentResponse
     */
    iEzsigndocumentPagetotal: number;
    /**
     * The number of signatures that were signed in the document.
     * @type {number}
     * @memberof EzsigndocumentResponse
     */
    iEzsigndocumentSignaturesigned: number;
    /**
     * The number of total signatures that were requested in the Ezsigndocument.
     * @type {number}
     * @memberof EzsigndocumentResponse
     */
    iEzsigndocumentSignaturetotal: number;
    /**
     * MD5 Hash of the initial PDF Document before signatures were applied to it.
     * @type {string}
     * @memberof EzsigndocumentResponse
     */
    sEzsigndocumentMD5initial: string;
    /**
     * MD5 Hash of the final PDF Document after all signatures were applied to it.
     * @type {string}
     * @memberof EzsigndocumentResponse
     */
    sEzsigndocumentMD5signed: string;
    /**
     * 
     * @type {CommonAudit}
     * @memberof EzsigndocumentResponse
     */
    objAudit: CommonAudit;
}

export function EzsigndocumentResponseFromJSON(json: any): EzsigndocumentResponse {
    return EzsigndocumentResponseFromJSONTyped(json, false);
}

export function EzsigndocumentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsigndocumentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiEzsignfolderID': json['fkiEzsignfolderID'],
        'dtEzsigndocumentDuedate': json['dtEzsigndocumentDuedate'],
        'fkiLanguageID': json['fkiLanguageID'],
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
        'objAudit': CommonAuditFromJSON(json['objAudit']),
    };
}

export function EzsigndocumentResponseToJSON(value?: EzsigndocumentResponse | null): any {
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
        'objAudit': CommonAuditToJSON(value.objAudit),
    };
}


