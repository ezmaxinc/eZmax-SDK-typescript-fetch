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
    CommonResponse,
    CommonResponseFromJSON,
    CommonResponseFromJSONTyped,
    CommonResponseToJSON,
    CommonResponseObjDebug,
    CommonResponseObjDebugFromJSON,
    CommonResponseObjDebugFromJSONTyped,
    CommonResponseObjDebugToJSON,
    CommonResponseObjDebugPayload,
    CommonResponseObjDebugPayloadFromJSON,
    CommonResponseObjDebugPayloadFromJSONTyped,
    CommonResponseObjDebugPayloadToJSON,
    UserCreateEzsignuserV1ResponseMPayload,
    UserCreateEzsignuserV1ResponseMPayloadFromJSON,
    UserCreateEzsignuserV1ResponseMPayloadFromJSONTyped,
    UserCreateEzsignuserV1ResponseMPayloadToJSON,
} from './';

/**
 * Response for the /1/module/user/createEzsignuser API Request
 * @export
 * @interface UserCreateEzsignuserV1Response
 */
export interface UserCreateEzsignuserV1Response {
    /**
     * 
     * @type {UserCreateEzsignuserV1ResponseMPayload}
     * @memberof UserCreateEzsignuserV1Response
     */
    mPayload: UserCreateEzsignuserV1ResponseMPayload;
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof UserCreateEzsignuserV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof UserCreateEzsignuserV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function UserCreateEzsignuserV1ResponseFromJSON(json: any): UserCreateEzsignuserV1Response {
    return UserCreateEzsignuserV1ResponseFromJSONTyped(json, false);
}

export function UserCreateEzsignuserV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCreateEzsignuserV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mPayload': UserCreateEzsignuserV1ResponseMPayloadFromJSON(json['mPayload']),
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function UserCreateEzsignuserV1ResponseToJSON(value?: UserCreateEzsignuserV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mPayload': UserCreateEzsignuserV1ResponseMPayloadToJSON(value.mPayload),
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


