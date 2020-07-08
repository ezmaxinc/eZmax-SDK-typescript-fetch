/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.3
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * This is a debug object containing debugging information on the actual function
 * @export
 * @interface CommonResponseObjDebugPayload
 */
export interface CommonResponseObjDebugPayload {
    /**
     * The minimum version of the function that can be called
     * @type {number}
     * @memberof CommonResponseObjDebugPayload
     */
    iVersionMin: number;
    /**
     * The maximum version of the function that can be called
     * @type {number}
     * @memberof CommonResponseObjDebugPayload
     */
    iVersionMax: number;
    /**
     * An array of permissions required to access this function.
     * 
     * If the value "0" is present in the array, anyone can call this function.
     * 
     * You must have one of the permission to access the function. You don't need to have all of them.
     * @type {Array<number>}
     * @memberof CommonResponseObjDebugPayload
     */
    aRequiredPermissions: Array<number>;
}

export function CommonResponseObjDebugPayloadFromJSON(json: any): CommonResponseObjDebugPayload {
    return CommonResponseObjDebugPayloadFromJSONTyped(json, false);
}

export function CommonResponseObjDebugPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonResponseObjDebugPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'iVersionMin': json['iVersionMin'],
        'iVersionMax': json['iVersionMax'],
        'aRequiredPermissions': json['a_RequiredPermissions'],
    };
}

export function CommonResponseObjDebugPayloadToJSON(value?: CommonResponseObjDebugPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'iVersionMin': value.iVersionMin,
        'iVersionMax': value.iVersionMax,
        'a_RequiredPermissions': value.aRequiredPermissions,
    };
}


