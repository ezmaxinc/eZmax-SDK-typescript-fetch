/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.42
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Payload for the /1/object/ezsigndocument/createObject API Request
 * @export
 * @interface EzsigndocumentCreateObjectV1ResponseMPayload
 */
export interface EzsigndocumentCreateObjectV1ResponseMPayload {
    /**
     * An array of unique IDs representing the object that were requested to be created.
     * 
     * They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @type {Array<number>}
     * @memberof EzsigndocumentCreateObjectV1ResponseMPayload
     */
    a_pkiEzsigndocumentID: Array<number>;
}

export function EzsigndocumentCreateObjectV1ResponseMPayloadFromJSON(json: any): EzsigndocumentCreateObjectV1ResponseMPayload {
    return EzsigndocumentCreateObjectV1ResponseMPayloadFromJSONTyped(json, false);
}

export function EzsigndocumentCreateObjectV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsigndocumentCreateObjectV1ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a_pkiEzsigndocumentID': json['a_pkiEzsigndocumentID'],
    };
}

export function EzsigndocumentCreateObjectV1ResponseMPayloadToJSON(value?: EzsigndocumentCreateObjectV1ResponseMPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a_pkiEzsigndocumentID': value.a_pkiEzsigndocumentID,
    };
}


