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
    ApikeyCreateObjectV1ResponseMPayload,
    ApikeyCreateObjectV1ResponseMPayloadFromJSON,
    ApikeyCreateObjectV1ResponseMPayloadFromJSONTyped,
    ApikeyCreateObjectV1ResponseMPayloadToJSON,
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
 * Response for the /1/object/apikey/createObject API Request
 * @export
 * @interface ApikeyCreateObjectV1Response
 */
export interface ApikeyCreateObjectV1Response {
    /**
     * 
     * @type {ApikeyCreateObjectV1ResponseMPayload}
     * @memberof ApikeyCreateObjectV1Response
     */
    mPayload: ApikeyCreateObjectV1ResponseMPayload;
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof ApikeyCreateObjectV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof ApikeyCreateObjectV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function ApikeyCreateObjectV1ResponseFromJSON(json: any): ApikeyCreateObjectV1Response {
    return ApikeyCreateObjectV1ResponseFromJSONTyped(json, false);
}

export function ApikeyCreateObjectV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApikeyCreateObjectV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mPayload': ApikeyCreateObjectV1ResponseMPayloadFromJSON(json['mPayload']),
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function ApikeyCreateObjectV1ResponseToJSON(value?: ApikeyCreateObjectV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mPayload': ApikeyCreateObjectV1ResponseMPayloadToJSON(value.mPayload),
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


