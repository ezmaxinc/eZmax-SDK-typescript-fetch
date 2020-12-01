/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.19
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
    FranchisereferalincomeCreateObjectV1ResponseMPayload,
    FranchisereferalincomeCreateObjectV1ResponseMPayloadFromJSON,
    FranchisereferalincomeCreateObjectV1ResponseMPayloadFromJSONTyped,
    FranchisereferalincomeCreateObjectV1ResponseMPayloadToJSON,
} from './';

/**
 * Response for the /1/object/franchisereferalincome/createObject API Request
 * @export
 * @interface FranchisereferalincomeCreateObjectV1Response
 */
export interface FranchisereferalincomeCreateObjectV1Response {
    /**
     * 
     * @type {FranchisereferalincomeCreateObjectV1ResponseMPayload}
     * @memberof FranchisereferalincomeCreateObjectV1Response
     */
    mPayload: FranchisereferalincomeCreateObjectV1ResponseMPayload;
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof FranchisereferalincomeCreateObjectV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof FranchisereferalincomeCreateObjectV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function FranchisereferalincomeCreateObjectV1ResponseFromJSON(json: any): FranchisereferalincomeCreateObjectV1Response {
    return FranchisereferalincomeCreateObjectV1ResponseFromJSONTyped(json, false);
}

export function FranchisereferalincomeCreateObjectV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FranchisereferalincomeCreateObjectV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mPayload': FranchisereferalincomeCreateObjectV1ResponseMPayloadFromJSON(json['mPayload']),
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function FranchisereferalincomeCreateObjectV1ResponseToJSON(value?: FranchisereferalincomeCreateObjectV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mPayload': FranchisereferalincomeCreateObjectV1ResponseMPayloadToJSON(value.mPayload),
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


