/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.41
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
} from './';

/**
 * Response for the /1/object/ezsignsignature/getObject API Request
 * @export
 * @interface EzsignsignatureGetObjectV1Response
 */
export interface EzsignsignatureGetObjectV1Response {
    /**
     * Payload for the /1/object/ezsignsignature/getObject API Request
     * @type {object}
     * @memberof EzsignsignatureGetObjectV1Response
     */
    mPayload: object;
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof EzsignsignatureGetObjectV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof EzsignsignatureGetObjectV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function EzsignsignatureGetObjectV1ResponseFromJSON(json: any): EzsignsignatureGetObjectV1Response {
    return EzsignsignatureGetObjectV1ResponseFromJSONTyped(json, false);
}

export function EzsignsignatureGetObjectV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignsignatureGetObjectV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mPayload': json['mPayload'],
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function EzsignsignatureGetObjectV1ResponseToJSON(value?: EzsignsignatureGetObjectV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mPayload': value.mPayload,
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


