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
import {
    ActivesessionGetCurrentV1ResponseMPayload,
    ActivesessionGetCurrentV1ResponseMPayloadFromJSON,
    ActivesessionGetCurrentV1ResponseMPayloadFromJSONTyped,
    ActivesessionGetCurrentV1ResponseMPayloadToJSON,
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
 * Response for the /1/object/activesession/getCurrent API Request
 * @export
 * @interface ActivesessionGetCurrentV1Response
 */
export interface ActivesessionGetCurrentV1Response {
    /**
     * 
     * @type {ActivesessionGetCurrentV1ResponseMPayload}
     * @memberof ActivesessionGetCurrentV1Response
     */
    mPayload: ActivesessionGetCurrentV1ResponseMPayload;
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof ActivesessionGetCurrentV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof ActivesessionGetCurrentV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function ActivesessionGetCurrentV1ResponseFromJSON(json: any): ActivesessionGetCurrentV1Response {
    return ActivesessionGetCurrentV1ResponseFromJSONTyped(json, false);
}

export function ActivesessionGetCurrentV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivesessionGetCurrentV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mPayload': ActivesessionGetCurrentV1ResponseMPayloadFromJSON(json['mPayload']),
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function ActivesessionGetCurrentV1ResponseToJSON(value?: ActivesessionGetCurrentV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mPayload': ActivesessionGetCurrentV1ResponseMPayloadToJSON(value.mPayload),
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


