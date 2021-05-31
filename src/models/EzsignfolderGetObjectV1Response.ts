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
    EzsignfolderGetObjectV1ResponseMPayload,
    EzsignfolderGetObjectV1ResponseMPayloadFromJSON,
    EzsignfolderGetObjectV1ResponseMPayloadFromJSONTyped,
    EzsignfolderGetObjectV1ResponseMPayloadToJSON,
} from './';

/**
 * Response for the /1/object/ezsignfolder/getObject API Request
 * @export
 * @interface EzsignfolderGetObjectV1Response
 */
export interface EzsignfolderGetObjectV1Response {
    /**
     * 
     * @type {EzsignfolderGetObjectV1ResponseMPayload}
     * @memberof EzsignfolderGetObjectV1Response
     */
    mPayload: EzsignfolderGetObjectV1ResponseMPayload;
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof EzsignfolderGetObjectV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof EzsignfolderGetObjectV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function EzsignfolderGetObjectV1ResponseFromJSON(json: any): EzsignfolderGetObjectV1Response {
    return EzsignfolderGetObjectV1ResponseFromJSONTyped(json, false);
}

export function EzsignfolderGetObjectV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfolderGetObjectV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mPayload': EzsignfolderGetObjectV1ResponseMPayloadFromJSON(json['mPayload']),
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function EzsignfolderGetObjectV1ResponseToJSON(value?: EzsignfolderGetObjectV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mPayload': EzsignfolderGetObjectV1ResponseMPayloadToJSON(value.mPayload),
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


