/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.38
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Payload for the /1/object/ezsigndocument/{pkiEzsigndocument}/getDownloadUrl API Request
 * @export
 * @interface EzsigndocumentGetDownloadUrlV1ResponseMPayload
 */
export interface EzsigndocumentGetDownloadUrlV1ResponseMPayload {
    /**
     * The Url to the requested document.
     * 
     * Url will expire after 5 minutes.
     * @type {string}
     * @memberof EzsigndocumentGetDownloadUrlV1ResponseMPayload
     */
    sDownloadUrl: string;
}

export function EzsigndocumentGetDownloadUrlV1ResponseMPayloadFromJSON(json: any): EzsigndocumentGetDownloadUrlV1ResponseMPayload {
    return EzsigndocumentGetDownloadUrlV1ResponseMPayloadFromJSONTyped(json, false);
}

export function EzsigndocumentGetDownloadUrlV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsigndocumentGetDownloadUrlV1ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sDownloadUrl': json['sDownloadUrl'],
    };
}

export function EzsigndocumentGetDownloadUrlV1ResponseMPayloadToJSON(value?: EzsigndocumentGetDownloadUrlV1ResponseMPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sDownloadUrl': value.sDownloadUrl,
    };
}


