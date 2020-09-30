/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.17
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
export interface EzsignsignatureCreateObjectV1Response extends CommonResponse {
    /**
     * 
     * @type {EzsignsignatureCreateObjectV1ResponseMPayload}
     * @memberof EzsignsignatureCreateObjectV1Response
     */
    mPayload: EzsignsignatureCreateObjectV1ResponseMPayload;
}

export function EzsignsignatureCreateObjectV1ResponseFromJSON(json: any): EzsignsignatureCreateObjectV1Response {
    return EzsignsignatureCreateObjectV1ResponseFromJSONTyped(json, false);
}

export function EzsignsignatureCreateObjectV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignsignatureCreateObjectV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...CommonResponseFromJSONTyped(json, ignoreDiscriminator),
        'mPayload': EzsignsignatureCreateObjectV1ResponseMPayloadFromJSON(json['mPayload']),
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
        ...CommonResponseToJSON(value),
        'mPayload': EzsignsignatureCreateObjectV1ResponseMPayloadToJSON(value.mPayload),
    };
}


