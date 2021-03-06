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
/**
 * Payload for the /2/module/authenticate/authenticate API Request
 * @export
 * @interface AuthenticateAuthenticateV2ResponseMPayload
 */
export interface AuthenticateAuthenticateV2ResponseMPayload {
    /**
     * The Authorization key
     * @type {string}
     * @memberof AuthenticateAuthenticateV2ResponseMPayload
     */
    sAuthorization: string;
    /**
     * The secret key
     * @type {string}
     * @memberof AuthenticateAuthenticateV2ResponseMPayload
     */
    sSecret: string;
}

export function AuthenticateAuthenticateV2ResponseMPayloadFromJSON(json: any): AuthenticateAuthenticateV2ResponseMPayload {
    return AuthenticateAuthenticateV2ResponseMPayloadFromJSONTyped(json, false);
}

export function AuthenticateAuthenticateV2ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticateAuthenticateV2ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sAuthorization': json['sAuthorization'],
        'sSecret': json['sSecret'],
    };
}

export function AuthenticateAuthenticateV2ResponseMPayloadToJSON(value?: AuthenticateAuthenticateV2ResponseMPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sAuthorization': value.sAuthorization,
        'sSecret': value.sSecret,
    };
}


