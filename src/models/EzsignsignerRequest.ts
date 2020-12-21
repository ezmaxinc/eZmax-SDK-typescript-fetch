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
/**
 * An Ezsignsigner Object
 * @export
 * @interface EzsignsignerRequest
 */
export interface EzsignsignerRequest {
    /**
     * The unique ID of the Taxassignment.
     * 
     * Valid values:
     * 
     * |Value|Description|
     * |-|-|
     * |1|No tax|
     * |2|GST|
     * |3|HST (ON)|
     * |4|HST (NB)|
     * |5|HST (NS)|
     * |6|HST (NL)|
     * |7|HST (PE)|
     * |8|GST + QST (QC)|
     * |9|GST + QST (QC) Non-Recoverable|
     * |10|GST + PST (BC)|
     * |11|GST + PST (SK)|
     * |12|GST + RST (MB)|
     * |13|GST + PST (BC) Non-Recoverable|
     * |14|GST + PST (SK) Non-Recoverable|
     * |15|GST + RST (MB) Non-Recoverable|
     * @type {number}
     * @memberof EzsignsignerRequest
     */
    fkiTaxassignmentID: number;
    /**
     * The unique ID of the Secretquestion.
     * 
     * Valid values:
     * 
     * |Value|Description|
     * |-|-|
     * |1|The name of the hospital in which you were born|
     * |2|The name of your grade school|
     * |3|The last name of your favorite teacher|
     * |4|Your favorite sports team|
     * |5|Your favorite TV show|
     * |6|Your favorite movie|
     * |7|The name of the street on which you grew up|
     * |8|The name of your first employer|
     * |9|Your first car|
     * |10|Your favorite food|
     * |11|The name of your first pet|
     * |12|Favorite musician/band|
     * |13|What instrument you play|
     * |14|Your father's middle name|
     * |15|Your mother's maiden name|
     * |16|Name of your eldest child|
     * |17|Your spouse's middle name|
     * |18|Favorite restaurant|
     * |19|Childhood nickname|
     * |20|Favorite vacation destination|
     * |21|Your boat's name|
     * |22|Date of Birth (YYYY-MM-DD)|
     * @type {number}
     * @memberof EzsignsignerRequest
     */
    fkiSecretquestionID?: number;
    /**
     * The method the Ezsignsigner will authenticate to the signing platform.
     * 
     * 1. **Password** means the Ezsignsigner will receive a secure link by email.
     * 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**.
     * 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer.
     * 4. **InPersonPhone** means the Ezsignsigner will only be able to sign "In-Person" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**.
     * 5. **InPerson** means the Ezsignsigner will only be able to sign "In-Person" and there won't be any authentication. No email will be sent for invitation to sign. Make sure you evaluate the risk of signature denial and at minimum, we recommend you use a handwritten signature type.
     * @type {string}
     * @memberof EzsignsignerRequest
     */
    eEzsignsignerLogintype: EzsignsignerRequestEEzsignsignerLogintypeEnum;
    /**
     * The predefined answer to the secret question the Ezsignsigner will need to provide to successfully authenticate.
     * @type {string}
     * @memberof EzsignsignerRequest
     */
    sEzsignsignerSecretanswer?: string;
}

/**
* @export
* @enum {string}
*/
export enum EzsignsignerRequestEEzsignsignerLogintypeEnum {
    Password = 'Password',
    PasswordPhone = 'PasswordPhone',
    PasswordQuestion = 'PasswordQuestion',
    InPersonPhone = 'InPersonPhone',
    InPerson = 'InPerson'
}

export function EzsignsignerRequestFromJSON(json: any): EzsignsignerRequest {
    return EzsignsignerRequestFromJSONTyped(json, false);
}

export function EzsignsignerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignsignerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiTaxassignmentID': json['fkiTaxassignmentID'],
        'fkiSecretquestionID': !exists(json, 'fkiSecretquestionID') ? undefined : json['fkiSecretquestionID'],
        'eEzsignsignerLogintype': json['eEzsignsignerLogintype'],
        'sEzsignsignerSecretanswer': !exists(json, 'sEzsignsignerSecretanswer') ? undefined : json['sEzsignsignerSecretanswer'],
    };
}

export function EzsignsignerRequestToJSON(value?: EzsignsignerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiTaxassignmentID': value.fkiTaxassignmentID,
        'fkiSecretquestionID': value.fkiSecretquestionID,
        'eEzsignsignerLogintype': value.eEzsignsignerLogintype,
        'sEzsignsignerSecretanswer': value.sEzsignsignerSecretanswer,
    };
}


