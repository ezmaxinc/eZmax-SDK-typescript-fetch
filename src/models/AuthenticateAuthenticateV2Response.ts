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
    AuthenticateAuthenticateV2ResponseMPayload,
    AuthenticateAuthenticateV2ResponseMPayloadFromJSON,
    AuthenticateAuthenticateV2ResponseMPayloadFromJSONTyped,
    AuthenticateAuthenticateV2ResponseMPayloadToJSON,
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
} from './';

/**
 * Response for the /2/module/authenticate/authenticate API Request
 * @export
 * @interface AuthenticateAuthenticateV2Response
 */
export interface AuthenticateAuthenticateV2Response {
    /**
     * 
     * @type {AuthenticateAuthenticateV2ResponseMPayload}
     * @memberof AuthenticateAuthenticateV2Response
     */
    mPayload: AuthenticateAuthenticateV2ResponseMPayload;
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof AuthenticateAuthenticateV2Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof AuthenticateAuthenticateV2Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function AuthenticateAuthenticateV2ResponseFromJSON(json: any): AuthenticateAuthenticateV2Response {
    return AuthenticateAuthenticateV2ResponseFromJSONTyped(json, false);
}

export function AuthenticateAuthenticateV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticateAuthenticateV2Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mPayload': AuthenticateAuthenticateV2ResponseMPayloadFromJSON(json['mPayload']),
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function AuthenticateAuthenticateV2ResponseToJSON(value?: AuthenticateAuthenticateV2Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mPayload': AuthenticateAuthenticateV2ResponseMPayloadToJSON(value.mPayload),
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


