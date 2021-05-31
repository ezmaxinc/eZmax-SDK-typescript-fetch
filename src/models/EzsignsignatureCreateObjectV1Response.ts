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
    EzsignsignatureCreateObjectV1ResponseMPayload,
    EzsignsignatureCreateObjectV1ResponseMPayloadFromJSON,
    EzsignsignatureCreateObjectV1ResponseMPayloadFromJSONTyped,
    EzsignsignatureCreateObjectV1ResponseMPayloadToJSON,
} from './';

/**
 * Response for the /1/object/ezsignsignature/createObject API Request
 * @export
 * @interface EzsignsignatureCreateObjectV1Response
 */
export interface EzsignsignatureCreateObjectV1Response {
    /**
     * 
     * @type {EzsignsignatureCreateObjectV1ResponseMPayload}
     * @memberof EzsignsignatureCreateObjectV1Response
     */
    mPayload: EzsignsignatureCreateObjectV1ResponseMPayload;
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof EzsignsignatureCreateObjectV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof EzsignsignatureCreateObjectV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function EzsignsignatureCreateObjectV1ResponseFromJSON(json: any): EzsignsignatureCreateObjectV1Response {
    return EzsignsignatureCreateObjectV1ResponseFromJSONTyped(json, false);
}

export function EzsignsignatureCreateObjectV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignsignatureCreateObjectV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mPayload': EzsignsignatureCreateObjectV1ResponseMPayloadFromJSON(json['mPayload']),
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function EzsignsignatureCreateObjectV1ResponseToJSON(value?: EzsignsignatureCreateObjectV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mPayload': EzsignsignatureCreateObjectV1ResponseMPayloadToJSON(value.mPayload),
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


