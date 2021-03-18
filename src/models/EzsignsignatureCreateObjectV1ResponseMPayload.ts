/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.37
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Payload for the /1/object/ezsignsignature/createObject API Request
 * @export
 * @interface EzsignsignatureCreateObjectV1ResponseMPayload
 */
export interface EzsignsignatureCreateObjectV1ResponseMPayload {
    /**
     * An array of unique IDs representing the object that were requested to be created.
     * 
     * They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @type {Array<number>}
     * @memberof EzsignsignatureCreateObjectV1ResponseMPayload
     */
    a_pkiEzsignsignatureID: Array<number>;
}

export function EzsignsignatureCreateObjectV1ResponseMPayloadFromJSON(json: any): EzsignsignatureCreateObjectV1ResponseMPayload {
    return EzsignsignatureCreateObjectV1ResponseMPayloadFromJSONTyped(json, false);
}

export function EzsignsignatureCreateObjectV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignsignatureCreateObjectV1ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a_pkiEzsignsignatureID': json['a_pkiEzsignsignatureID'],
    };
}

export function EzsignsignatureCreateObjectV1ResponseMPayloadToJSON(value?: EzsignsignatureCreateObjectV1ResponseMPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a_pkiEzsignsignatureID': value.a_pkiEzsignsignatureID,
    };
}


