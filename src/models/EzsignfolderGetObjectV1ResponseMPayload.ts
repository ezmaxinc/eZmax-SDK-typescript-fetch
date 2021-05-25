/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.43
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
    EzsignfolderResponse,
    EzsignfolderResponseFromJSON,
    EzsignfolderResponseFromJSONTyped,
    EzsignfolderResponseToJSON,
    FieldEEzsignfolderSendreminderfrequency,
    FieldEEzsignfolderSendreminderfrequencyFromJSON,
    FieldEEzsignfolderSendreminderfrequencyFromJSONTyped,
    FieldEEzsignfolderSendreminderfrequencyToJSON,
    FieldEEzsignfolderStep,
    FieldEEzsignfolderStepFromJSON,
    FieldEEzsignfolderStepFromJSONTyped,
    FieldEEzsignfolderStepToJSON,
} from './';

/**
 * Payload for the /1/object/ezsignfolder/getObject API Request
 * @export
 * @interface EzsignfolderGetObjectV1ResponseMPayload
 */
export interface EzsignfolderGetObjectV1ResponseMPayload {
    /**
     * The unique ID of the Ezsignfoldertype.
     * 
     * This value can be queried by the API and is also visible in the admin interface.
     * 
     * There are two types of Ezsignfoldertype. **User** and **Shared**. **User** can only be seen by the user who created the folder or its assistants. Access to **Shared** folders are configurable for access and email delivery. You should typically choose a **Shared** type here.
     * @type {number}
     * @memberof EzsignfolderGetObjectV1ResponseMPayload
     */
    fkiEzsignfoldertypeID: number;
    /**
     * The unique ID of the Ezsigntsarequirement.
     * 
     * Determine if a Time Stamping Authority should add a timestamp on each of the signature.
     * Valid values:
     * 
     * |Value|Description|
     * |-|-|
     * |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server's time.|
     * |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server's time. **Additional fee applies**|
     * |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
     * @type {number}
     * @memberof EzsignfolderGetObjectV1ResponseMPayload
     */
    fkiEzsigntsarequirementID: number;
    /**
     * The description of the Ezsign Folder
     * @type {string}
     * @memberof EzsignfolderGetObjectV1ResponseMPayload
     */
    sEzsignfolderDescription: string;
    /**
     * Somes extra notes about the eZsign Folder
     * @type {string}
     * @memberof EzsignfolderGetObjectV1ResponseMPayload
     */
    tEzsignfolderNote: string;
    /**
     * 
     * @type {FieldEEzsignfolderSendreminderfrequency}
     * @memberof EzsignfolderGetObjectV1ResponseMPayload
     */
    eEzsignfolderSendreminderfrequency: FieldEEzsignfolderSendreminderfrequency;
    /**
     * The unique ID of the Ezsignfolder
     * @type {number}
     * @memberof EzsignfolderGetObjectV1ResponseMPayload
     */
    pkiEzsignfolderID: number;
    /**
     * The date and time at which the Ezsign folder was sent the last time.
     * @type {string}
     * @memberof EzsignfolderGetObjectV1ResponseMPayload
     */
    dtEzsignfolderSentdate: string;
    /**
     * 
     * @type {FieldEEzsignfolderStep}
     * @memberof EzsignfolderGetObjectV1ResponseMPayload
     */
    eEzsignfolderStep: FieldEEzsignfolderStep;
    /**
     * The date and time at which the folder was closed. Either by applying the last signature or by completing it prematurely.
     * @type {string}
     * @memberof EzsignfolderGetObjectV1ResponseMPayload
     */
    dtEzsignfolderClose: string;
    /**
     * 
     * @type {CommonAudit}
     * @memberof EzsignfolderGetObjectV1ResponseMPayload
     */
    objAudit: CommonAudit;
}

export function EzsignfolderGetObjectV1ResponseMPayloadFromJSON(json: any): EzsignfolderGetObjectV1ResponseMPayload {
    return EzsignfolderGetObjectV1ResponseMPayloadFromJSONTyped(json, false);
}

export function EzsignfolderGetObjectV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfolderGetObjectV1ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiEzsignfoldertypeID': json['fkiEzsignfoldertypeID'],
        'fkiEzsigntsarequirementID': json['fkiEzsigntsarequirementID'],
        'sEzsignfolderDescription': json['sEzsignfolderDescription'],
        'tEzsignfolderNote': json['tEzsignfolderNote'],
        'eEzsignfolderSendreminderfrequency': FieldEEzsignfolderSendreminderfrequencyFromJSON(json['eEzsignfolderSendreminderfrequency']),
        'pkiEzsignfolderID': json['pkiEzsignfolderID'],
        'dtEzsignfolderSentdate': json['dtEzsignfolderSentdate'],
        'eEzsignfolderStep': FieldEEzsignfolderStepFromJSON(json['eEzsignfolderStep']),
        'dtEzsignfolderClose': json['dtEzsignfolderClose'],
        'objAudit': CommonAuditFromJSON(json['objAudit']),
    };
}

export function EzsignfolderGetObjectV1ResponseMPayloadToJSON(value?: EzsignfolderGetObjectV1ResponseMPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiEzsignfoldertypeID': value.fkiEzsignfoldertypeID,
        'fkiEzsigntsarequirementID': value.fkiEzsigntsarequirementID,
        'sEzsignfolderDescription': value.sEzsignfolderDescription,
        'tEzsignfolderNote': value.tEzsignfolderNote,
        'eEzsignfolderSendreminderfrequency': FieldEEzsignfolderSendreminderfrequencyToJSON(value.eEzsignfolderSendreminderfrequency),
        'pkiEzsignfolderID': value.pkiEzsignfolderID,
        'dtEzsignfolderSentdate': value.dtEzsignfolderSentdate,
        'eEzsignfolderStep': FieldEEzsignfolderStepToJSON(value.eEzsignfolderStep),
        'dtEzsignfolderClose': value.dtEzsignfolderClose,
        'objAudit': CommonAuditToJSON(value.objAudit),
    };
}


