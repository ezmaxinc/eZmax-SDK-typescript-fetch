/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.38
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
    a_sEmailAddressSuccess: Array<string>;
    /**
     * An array of email addresses that failed.
     * @type {Array<string>}
     * @memberof UserCreateEzsignuserV1ResponseMPayload
     */
    a_sEmailAddressFailure: Array<string>;
}

export function UserCreateEzsignuserV1ResponseMPayloadFromJSON(json: any): UserCreateEzsignuserV1ResponseMPayload {
    return UserCreateEzsignuserV1ResponseMPayloadFromJSONTyped(json, false);
}

export function UserCreateEzsignuserV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCreateEzsignuserV1ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a_sEmailAddressSuccess': json['a_sEmailAddressSuccess'],
        'a_sEmailAddressFailure': json['a_sEmailAddressFailure'],
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
        
        'a_sEmailAddressSuccess': value.a_sEmailAddressSuccess,
        'a_sEmailAddressFailure': value.a_sEmailAddressFailure,
    };
}


