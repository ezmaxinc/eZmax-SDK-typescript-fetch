/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.39
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
    EzsigndocumentResponse,
    EzsigndocumentResponseFromJSON,
    EzsigndocumentResponseFromJSONTyped,
    EzsigndocumentResponseToJSON,
    FieldEEzsigndocumentStep,
    FieldEEzsigndocumentStepFromJSON,
    FieldEEzsigndocumentStepFromJSONTyped,
    FieldEEzsigndocumentStepToJSON,
} from './';

/**
 * Payload for the /1/object/ezsigndocument/getObject API Request
 * @export
 * @interface EzsigndocumentGetObjectV1ResponseMPayload
 */
export interface EzsigndocumentGetObjectV1ResponseMPayload {
    /**
     * The unique ID of the Ezsignfolder
     * @type {number}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    fkiEzsignfolderID: number;
    /**
     * The maximum date and time at which the document can be signed.
     * @type {string}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
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
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    fkiLanguageID: number;
    /**
     * The name of the document that will be presented to Ezsignfoldersignerassociations
     * @type {string}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    sEzsigndocumentName: string;
    /**
     * The unique ID of the Ezsigntemplate
     * @type {number}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    pkiEzsigndocumentID: number;
    /**
     * 
     * @type {FieldEEzsigndocumentStep}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    eEzsigndocumentStep: FieldEEzsigndocumentStep;
    /**
     * The date and time when the Ezsigndocument was first sent.
     * @type {string}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    dtEzsigndocumentFirstsend: string;
    /**
     * The date and time when the Ezsigndocument was sent the last time.
     * @type {string}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    dtEzsigndocumentLastsend: string;
    /**
     * The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
     * @type {number}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    iEzsigndocumentOrder: number;
    /**
     * The number of pages in the Ezsigndocument.
     * @type {number}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    iEzsigndocumentPagetotal: number;
    /**
     * The number of signatures that were signed in the document.
     * @type {number}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    iEzsigndocumentSignaturesigned: number;
    /**
     * The number of total signatures that were requested in the Ezsigndocument.
     * @type {number}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    iEzsigndocumentSignaturetotal: number;
    /**
     * MD5 Hash of the initial PDF Document before signatures were applied to it.
     * @type {string}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    sEzsigndocumentMD5initial: string;
    /**
     * MD5 Hash of the final PDF Document after all signatures were applied to it.
     * @type {string}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    sEzsigndocumentMD5signed: string;
    /**
     * 
     * @type {CommonAudit}
     * @memberof EzsigndocumentGetObjectV1ResponseMPayload
     */
    objAudit: CommonAudit;
}

export function EzsigndocumentGetObjectV1ResponseMPayloadFromJSON(json: any): EzsigndocumentGetObjectV1ResponseMPayload {
    return EzsigndocumentGetObjectV1ResponseMPayloadFromJSONTyped(json, false);
}

export function EzsigndocumentGetObjectV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsigndocumentGetObjectV1ResponseMPayload {
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

export function EzsigndocumentGetObjectV1ResponseMPayloadToJSON(value?: EzsigndocumentGetObjectV1ResponseMPayload | null): any {
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


