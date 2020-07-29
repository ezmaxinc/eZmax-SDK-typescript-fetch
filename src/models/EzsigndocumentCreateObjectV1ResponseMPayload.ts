/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Payload for the /1/object/ezsigndocument/editObject API Request
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
    aPkiEzsigndocumentID: Array<number>;
}

export function EzsigndocumentCreateObjectV1ResponseMPayloadFromJSON(json: any): EzsigndocumentCreateObjectV1ResponseMPayload {
    return EzsigndocumentCreateObjectV1ResponseMPayloadFromJSONTyped(json, false);
}

export function EzsigndocumentCreateObjectV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsigndocumentCreateObjectV1ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aPkiEzsigndocumentID': json['a_pkiEzsigndocumentID'],
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
        
        'a_pkiEzsigndocumentID': value.aPkiEzsigndocumentID,
    };
}


