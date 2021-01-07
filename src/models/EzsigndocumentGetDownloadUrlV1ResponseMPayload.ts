/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.24
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


