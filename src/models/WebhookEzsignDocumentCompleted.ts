/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.46
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
    EzsigndocumentResponse,
    EzsigndocumentResponseFromJSON,
    EzsigndocumentResponseFromJSONTyped,
    EzsigndocumentResponseToJSON,
    WebhookEzsignDocumentCompletedAllOf,
    WebhookEzsignDocumentCompletedAllOfFromJSON,
    WebhookEzsignDocumentCompletedAllOfFromJSONTyped,
    WebhookEzsignDocumentCompletedAllOfToJSON,
    WebhookResponse,
    WebhookResponseFromJSON,
    WebhookResponseFromJSONTyped,
    WebhookResponseToJSON,
} from './';

/**
 * This is the base Webhook object
 * @export
 * @interface WebhookEzsignDocumentCompleted
 */
export interface WebhookEzsignDocumentCompleted {
    /**
     * 
     * @type {EzsigndocumentResponse}
     * @memberof WebhookEzsignDocumentCompleted
     */
    objEzsigndocument: EzsigndocumentResponse;
    /**
     * 
     * @type {WebhookResponse}
     * @memberof WebhookEzsignDocumentCompleted
     */
    objWebhook: WebhookResponse;
    /**
     * An array containing details of previous attempts that were made to deliver the message.
     * The array is empty if it's the first attempt.
     * @type {Array<AttemptResponse>}
     * @memberof WebhookEzsignDocumentCompleted
     */
    a_objAttempt: Array<AttemptResponse>;
}

export function WebhookEzsignDocumentCompletedFromJSON(json: any): WebhookEzsignDocumentCompleted {
    return WebhookEzsignDocumentCompletedFromJSONTyped(json, false);
}

export function WebhookEzsignDocumentCompletedFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookEzsignDocumentCompleted {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsigndocument': EzsigndocumentResponseFromJSON(json['objEzsigndocument']),
        'objWebhook': WebhookResponseFromJSON(json['objWebhook']),
        'a_objAttempt': ((json['a_objAttempt'] as Array<any>).map(AttemptResponseFromJSON)),
    };
}

export function WebhookEzsignDocumentCompletedToJSON(value?: WebhookEzsignDocumentCompleted | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsigndocument': EzsigndocumentResponseToJSON(value.objEzsigndocument),
        'objWebhook': WebhookResponseToJSON(value.objWebhook),
        'a_objAttempt': ((value.a_objAttempt as Array<any>).map(AttemptResponseToJSON)),
    };
}


