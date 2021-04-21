/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.42
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AttemptResponse,
    AttemptResponseFromJSON,
    AttemptResponseFromJSONTyped,
    AttemptResponseToJSON,
    CommonWebhook,
    CommonWebhookFromJSON,
    CommonWebhookFromJSONTyped,
    CommonWebhookToJSON,
    EzsignfolderResponse,
    EzsignfolderResponseFromJSON,
    EzsignfolderResponseFromJSONTyped,
    EzsignfolderResponseToJSON,
    WebhookEzsignFolderCompletedAllOf,
    WebhookEzsignFolderCompletedAllOfFromJSON,
    WebhookEzsignFolderCompletedAllOfFromJSONTyped,
    WebhookEzsignFolderCompletedAllOfToJSON,
    WebhookResponse,
    WebhookResponseFromJSON,
    WebhookResponseFromJSONTyped,
    WebhookResponseToJSON,
} from './';

/**
 * This is the base Webhook object
 * @export
 * @interface WebhookEzsignFolderCompleted
 */
export interface WebhookEzsignFolderCompleted {
    /**
     * 
     * @type {EzsignfolderResponse}
     * @memberof WebhookEzsignFolderCompleted
     */
    objEzsignfolder: EzsignfolderResponse;
    /**
     * 
     * @type {WebhookResponse}
     * @memberof WebhookEzsignFolderCompleted
     */
    objWebhook: WebhookResponse;
    /**
     * An array containing details of previous attempts that were made to deliver the message.
     * The array is empty if it's the first attempt.
     * @type {Array<AttemptResponse>}
     * @memberof WebhookEzsignFolderCompleted
     */
    a_objAttempt: Array<AttemptResponse>;
}

export function WebhookEzsignFolderCompletedFromJSON(json: any): WebhookEzsignFolderCompleted {
    return WebhookEzsignFolderCompletedFromJSONTyped(json, false);
}

export function WebhookEzsignFolderCompletedFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookEzsignFolderCompleted {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsignfolder': EzsignfolderResponseFromJSON(json['objEzsignfolder']),
        'objWebhook': WebhookResponseFromJSON(json['objWebhook']),
        'a_objAttempt': ((json['a_objAttempt'] as Array<any>).map(AttemptResponseFromJSON)),
    };
}

export function WebhookEzsignFolderCompletedToJSON(value?: WebhookEzsignFolderCompleted | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsignfolder': EzsignfolderResponseToJSON(value.objEzsignfolder),
        'objWebhook': WebhookResponseToJSON(value.objWebhook),
        'a_objAttempt': ((value.a_objAttempt as Array<any>).map(AttemptResponseToJSON)),
    };
}


