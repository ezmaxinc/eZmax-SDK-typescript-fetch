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

/**
 * The user type of the User for SSPR
 * @export
 * @enum {string}
 */
export enum FieldEUserTypeSSPR {
    EzsignUser = 'EzsignUser',
    Native = 'Native'
}

export function FieldEUserTypeSSPRFromJSON(json: any): FieldEUserTypeSSPR {
    return FieldEUserTypeSSPRFromJSONTyped(json, false);
}

export function FieldEUserTypeSSPRFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldEUserTypeSSPR {
    return json as FieldEUserTypeSSPR;
}

export function FieldEUserTypeSSPRToJSON(value?: FieldEUserTypeSSPR | null): any {
    return value as any;
}

