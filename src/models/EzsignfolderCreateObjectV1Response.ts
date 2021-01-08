/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.25
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
    EzsignfolderCreateObjectV1ResponseMPayload,
    EzsignfolderCreateObjectV1ResponseMPayloadFromJSON,
    EzsignfolderCreateObjectV1ResponseMPayloadFromJSONTyped,
    EzsignfolderCreateObjectV1ResponseMPayloadToJSON,
} from './';

/**
 * Response for the /1/object/ezsignfolder/createObject API Request
 * @export
 * @interface EzsignfolderCreateObjectV1Response
 */
export interface EzsignfolderCreateObjectV1Response {
    /**
     * 
     * @type {EzsignfolderCreateObjectV1ResponseMPayload}
     * @memberof EzsignfolderCreateObjectV1Response
     */
    mPayload: EzsignfolderCreateObjectV1ResponseMPayload;
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof EzsignfolderCreateObjectV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof EzsignfolderCreateObjectV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function EzsignfolderCreateObjectV1ResponseFromJSON(json: any): EzsignfolderCreateObjectV1Response {
    return EzsignfolderCreateObjectV1ResponseFromJSONTyped(json, false);
}

export function EzsignfolderCreateObjectV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfolderCreateObjectV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mPayload': EzsignfolderCreateObjectV1ResponseMPayloadFromJSON(json['mPayload']),
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function EzsignfolderCreateObjectV1ResponseToJSON(value?: EzsignfolderCreateObjectV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mPayload': EzsignfolderCreateObjectV1ResponseMPayloadToJSON(value.mPayload),
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


