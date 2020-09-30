/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Generic Autocomplete Response
 * @export
 * @interface CommonGetAutocompleteV1ResponseMPayload
 */
export interface CommonGetAutocompleteV1ResponseMPayload {
    /**
     * The Category (ie group) for the dropdown or an empty string if not categorized
     * @type {string}
     * @memberof CommonGetAutocompleteV1ResponseMPayload
     */
    group: string;
    /**
     * The Unique ID of the element
     * @type {string}
     * @memberof CommonGetAutocompleteV1ResponseMPayload
     */
    id: string;
    /**
     * The Description of the element
     * @type {string}
     * @memberof CommonGetAutocompleteV1ResponseMPayload
     */
    option: string;
}

export function CommonGetAutocompleteV1ResponseMPayloadFromJSON(json: any): CommonGetAutocompleteV1ResponseMPayload {
    return CommonGetAutocompleteV1ResponseMPayloadFromJSONTyped(json, false);
}

export function CommonGetAutocompleteV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonGetAutocompleteV1ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'group': json['group'],
        'id': json['id'],
        'option': json['option'],
    };
}

export function CommonGetAutocompleteV1ResponseMPayloadToJSON(value?: CommonGetAutocompleteV1ResponseMPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group': value.group,
        'id': value.id,
        'option': value.option,
    };
}

