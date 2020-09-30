/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
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
 * 
 * @export
 * @interface EzsignfolderResponseAllOf
 */
export interface EzsignfolderResponseAllOf {
    /**
     * The unique ID of the Ezsignfoldertype.
     * 
     * This value can be queried by the API and is also visible in the admin interface.
     * 
     * There are two types of Ezsignfoldertype. **User** and **Shared**. **User** can only be seen by the user who created the folder or its assistants. Access to **Shared** folders are configurable for access and email delivery. You should typically choose a **Shared** type here.
     * @type {number}
     * @memberof EzsignfolderResponseAllOf
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
     * @memberof EzsignfolderResponseAllOf
     */
    fkiEzsigntsarequirementID: number;
    /**
     * The description of the Ezsign Folder
     * @type {string}
     * @memberof EzsignfolderResponseAllOf
     */
    sEzsignfolderDescription: string;
    /**
     * Somes extra notes about the eZsign Folder
     * @type {string}
     * @memberof EzsignfolderResponseAllOf
     */
    tEzsignfolderNote: string;
    /**
     * 
     * @type {FieldEEzsignfolderSendreminderfrequency}
     * @memberof EzsignfolderResponseAllOf
     */
    eEzsignfolderSendreminderfrequency: FieldEEzsignfolderSendreminderfrequency;
    /**
     * The unique ID of the Ezsignfolder
     * @type {number}
     * @memberof EzsignfolderResponseAllOf
     */
    pkiEzsignfolderID: number;
    /**
     * The date and time at which the Ezsign folder was sent the last time.
     * @type {string}
     * @memberof EzsignfolderResponseAllOf
     */
    dtEzsignfolderSentdate: string;
    /**
     * 
     * @type {FieldEEzsignfolderStep}
     * @memberof EzsignfolderResponseAllOf
     */
    eEzsignfolderStep: FieldEEzsignfolderStep;
    /**
     * The date and time at which the folder was closed. Either by applying the last signature or by completing it prematurely.
     * @type {string}
     * @memberof EzsignfolderResponseAllOf
     */
    dtEzsignfolderClose: string;
}

export function EzsignfolderResponseAllOfFromJSON(json: any): EzsignfolderResponseAllOf {
    return EzsignfolderResponseAllOfFromJSONTyped(json, false);
}

export function EzsignfolderResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfolderResponseAllOf {
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
    };
}

export function EzsignfolderResponseAllOfToJSON(value?: EzsignfolderResponseAllOf | null): any {
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
    };
}


