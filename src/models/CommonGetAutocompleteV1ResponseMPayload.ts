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


