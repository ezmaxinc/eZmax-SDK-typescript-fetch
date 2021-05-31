/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.44
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    UserResponse,
    UserResponseFromJSON,
    UserResponseFromJSONTyped,
    UserResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface WebhookUserUserCreatedAllOf
 */
export interface WebhookUserUserCreatedAllOf {
    /**
     * 
     * @type {UserResponse}
     * @memberof WebhookUserUserCreatedAllOf
     */
    objUser: UserResponse;
}

export function WebhookUserUserCreatedAllOfFromJSON(json: any): WebhookUserUserCreatedAllOf {
    return WebhookUserUserCreatedAllOfFromJSONTyped(json, false);
}

export function WebhookUserUserCreatedAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookUserUserCreatedAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objUser': UserResponseFromJSON(json['objUser']),
    };
}

export function WebhookUserUserCreatedAllOfToJSON(value?: WebhookUserUserCreatedAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objUser': UserResponseToJSON(value.objUser),
    };
}


