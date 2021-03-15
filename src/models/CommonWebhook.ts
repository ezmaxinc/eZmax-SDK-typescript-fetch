/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.35
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
    WebhookResponse,
    WebhookResponseFromJSON,
    WebhookResponseFromJSONTyped,
    WebhookResponseToJSON,
} from './';

/**
 * This is the base Webhook object
 * @export
 * @interface CommonWebhook
 */
export interface CommonWebhook {
    /**
     * 
     * @type {WebhookResponse}
     * @memberof CommonWebhook
     */
    objWebhook: WebhookResponse;
    /**
     * An array containing details of previous attempts that were made to deliver the message.
     * The array is empty if it's the first attempt.
     * @type {Array<AttemptResponse>}
     * @memberof CommonWebhook
     */
    a_objAttempt: Array<AttemptResponse>;
}

export function CommonWebhookFromJSON(json: any): CommonWebhook {
    return CommonWebhookFromJSONTyped(json, false);
}

export function CommonWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonWebhook {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objWebhook': WebhookResponseFromJSON(json['objWebhook']),
        'a_objAttempt': ((json['a_objAttempt'] as Array<any>).map(AttemptResponseFromJSON)),
    };
}

export function CommonWebhookToJSON(value?: CommonWebhook | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objWebhook': WebhookResponseToJSON(value.objWebhook),
        'a_objAttempt': ((value.a_objAttempt as Array<any>).map(AttemptResponseToJSON)),
    };
}


