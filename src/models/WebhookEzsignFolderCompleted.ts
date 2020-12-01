/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.19
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
    aObjAttempt: Array<AttemptResponse>;
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
        'aObjAttempt': ((json['a_objAttempt'] as Array<any>).map(AttemptResponseFromJSON)),
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
        'a_objAttempt': ((value.aObjAttempt as Array<any>).map(AttemptResponseToJSON)),
    };
}


