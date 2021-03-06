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
 * Payload for the /1/object/ezsignfolder/createObject API Request
 * @export
 * @interface EzsignfolderCreateObjectV1ResponseMPayload
 */
export interface EzsignfolderCreateObjectV1ResponseMPayload {
    /**
     * An array of unique IDs representing the object that were requested to be created.
     * 
     * They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @type {Array<number>}
     * @memberof EzsignfolderCreateObjectV1ResponseMPayload
     */
    a_pkiEzsignfolderID: Array<number>;
}

export function EzsignfolderCreateObjectV1ResponseMPayloadFromJSON(json: any): EzsignfolderCreateObjectV1ResponseMPayload {
    return EzsignfolderCreateObjectV1ResponseMPayloadFromJSONTyped(json, false);
}

export function EzsignfolderCreateObjectV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfolderCreateObjectV1ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a_pkiEzsignfolderID': json['a_pkiEzsignfolderID'],
    };
}

export function EzsignfolderCreateObjectV1ResponseMPayloadToJSON(value?: EzsignfolderCreateObjectV1ResponseMPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a_pkiEzsignfolderID': value.a_pkiEzsignfolderID,
    };
}


