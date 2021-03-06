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
    a_RequiredPermissions: Array<number>;
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
        'a_RequiredPermissions': json['a_RequiredPermissions'],
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
        'a_RequiredPermissions': value.a_RequiredPermissions,
    };
}


