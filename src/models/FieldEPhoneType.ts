/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.32
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The type of phone number.
 * 
 * **Local** refers to a north American phone number. You would then need to specify sPhoneRegion, sPhoneExchange, sPhoneNumber.
 * **International** would be used for numbers outside of north america. You would then need to specify sPhoneInternational
 * @export
 * @enum {string}
 */
export enum FieldEPhoneType {
    Local = 'Local',
    International = 'International'
}

export function FieldEPhoneTypeFromJSON(json: any): FieldEPhoneType {
    return FieldEPhoneTypeFromJSONTyped(json, false);
}

export function FieldEPhoneTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldEPhoneType {
    return json as FieldEPhoneType;
}

export function FieldEPhoneTypeToJSON(value?: FieldEPhoneType | null): any {
    return value as any;
}

