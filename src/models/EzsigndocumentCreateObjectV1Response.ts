/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.14
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
    EzsigndocumentCreateObjectV1ResponseMPayload,
    EzsigndocumentCreateObjectV1ResponseMPayloadFromJSON,
    EzsigndocumentCreateObjectV1ResponseMPayloadFromJSONTyped,
    EzsigndocumentCreateObjectV1ResponseMPayloadToJSON,
} from './';

/**
 * Response for the /1/object/ezsigndocument/createObject API Request
 * @export
 * @interface EzsigndocumentCreateObjectV1Response
 */
export interface EzsigndocumentCreateObjectV1Response extends CommonResponse {
    /**
     * 
     * @type {EzsigndocumentCreateObjectV1ResponseMPayload}
     * @memberof EzsigndocumentCreateObjectV1Response
     */
    mPayload: EzsigndocumentCreateObjectV1ResponseMPayload;
}

export function EzsigndocumentCreateObjectV1ResponseFromJSON(json: any): EzsigndocumentCreateObjectV1Response {
    return EzsigndocumentCreateObjectV1ResponseFromJSONTyped(json, false);
}

export function EzsigndocumentCreateObjectV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsigndocumentCreateObjectV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...CommonResponseFromJSONTyped(json, ignoreDiscriminator),
        'mPayload': EzsigndocumentCreateObjectV1ResponseMPayloadFromJSON(json['mPayload']),
    };
}

export function EzsigndocumentCreateObjectV1ResponseToJSON(value?: EzsigndocumentCreateObjectV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...CommonResponseToJSON(value),
        'mPayload': EzsigndocumentCreateObjectV1ResponseMPayloadToJSON(value.mPayload),
    };
}


