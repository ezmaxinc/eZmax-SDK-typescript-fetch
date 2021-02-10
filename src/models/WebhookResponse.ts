/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.29
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A webhook object
 * @export
 * @interface WebhookResponse
 */
export interface WebhookResponse {
    /**
     * The Webhook ID. This value is visible in the admin interface.
     * @type {number}
     * @memberof WebhookResponse
     */
    pkiWebhookID: number;
    /**
     * The Module generating the Event.
     * @type {string}
     * @memberof WebhookResponse
     */
    eWebhookModule: WebhookResponseEWebhookModuleEnum;
    /**
     * This Ezsign Event. This property will be set only if the Module is "Ezsign".
     * @type {string}
     * @memberof WebhookResponse
     */
    eWebhookEzsignevent?: WebhookResponseEWebhookEzsigneventEnum;
    /**
     * The Customer Code in which the event was generated
     * @type {string}
     * @memberof WebhookResponse
     */
    pksCustomerCode: string;
    /**
     * The url being called
     * @type {string}
     * @memberof WebhookResponse
     */
    sWebhookUrl: string;
    /**
     * The email that will receive the webhook in case all attempts fail.
     * @type {string}
     * @memberof WebhookResponse
     */
    sWebhookEmailfailed: string;
    /**
     * This Management Event. This property will be set only if the Module is "Management".
     * @type {string}
     * @memberof WebhookResponse
     */
    eWebhookManagementevent?: WebhookResponseEWebhookManagementeventEnum;
}

/**
* @export
* @enum {string}
*/
export enum WebhookResponseEWebhookModuleEnum {
    Ezsign = 'Ezsign',
    Management = 'Management'
}/**
* @export
* @enum {string}
*/
export enum WebhookResponseEWebhookEzsigneventEnum {
    DocumentCompleted = 'DocumentCompleted',
    FolderCompleted = 'FolderCompleted'
}/**
* @export
* @enum {string}
*/
export enum WebhookResponseEWebhookManagementeventEnum {
    UserCreated = 'UserCreated'
}

export function WebhookResponseFromJSON(json: any): WebhookResponse {
    return WebhookResponseFromJSONTyped(json, false);
}

export function WebhookResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pkiWebhookID': json['pkiWebhookID'],
        'eWebhookModule': json['eWebhookModule'],
        'eWebhookEzsignevent': !exists(json, 'eWebhookEzsignevent') ? undefined : json['eWebhookEzsignevent'],
        'pksCustomerCode': json['pksCustomerCode'],
        'sWebhookUrl': json['sWebhookUrl'],
        'sWebhookEmailfailed': json['sWebhookEmailfailed'],
        'eWebhookManagementevent': !exists(json, 'eWebhookManagementevent') ? undefined : json['eWebhookManagementevent'],
    };
}

export function WebhookResponseToJSON(value?: WebhookResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pkiWebhookID': value.pkiWebhookID,
        'eWebhookModule': value.eWebhookModule,
        'eWebhookEzsignevent': value.eWebhookEzsignevent,
        'pksCustomerCode': value.pksCustomerCode,
        'sWebhookUrl': value.sWebhookUrl,
        'sWebhookEmailfailed': value.sWebhookEmailfailed,
        'eWebhookManagementevent': value.eWebhookManagementevent,
    };
}


