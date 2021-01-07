/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.24
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Payload for the /1/module/user/createEzsignuser API Request
 * @export
 * @interface UserCreateEzsignuserV1ResponseMPayload
 */
export interface UserCreateEzsignuserV1ResponseMPayload {
    /**
     * An array of email addresses that succeeded.
     * @type {Array<string>}
     * @memberof UserCreateEzsignuserV1ResponseMPayload
     */
    aSEmailAddressSuccess: Array<string>;
    /**
     * An array of email addresses that failed.
     * @type {Array<string>}
     * @memberof UserCreateEzsignuserV1ResponseMPayload
     */
    aSEmailAddressFailure: Array<string>;
}

export function UserCreateEzsignuserV1ResponseMPayloadFromJSON(json: any): UserCreateEzsignuserV1ResponseMPayload {
    return UserCreateEzsignuserV1ResponseMPayloadFromJSONTyped(json, false);
}

export function UserCreateEzsignuserV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCreateEzsignuserV1ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aSEmailAddressSuccess': json['a_sEmailAddressSuccess'],
        'aSEmailAddressFailure': json['a_sEmailAddressFailure'],
    };
}

export function UserCreateEzsignuserV1ResponseMPayloadToJSON(value?: UserCreateEzsignuserV1ResponseMPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a_sEmailAddressSuccess': value.aSEmailAddressSuccess,
        'a_sEmailAddressFailure': value.aSEmailAddressFailure,
    };
}


