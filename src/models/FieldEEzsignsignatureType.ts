/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.45
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The type of signature.
 * 
 * 1. **Acknowledgement** is for an acknowledgment of receipt.
 * 2. **City** is to request the city where the document is signed.
 * 2. **Handwritten** is for a handwritten kind of signature where users needs to "draw" their signature on screen.
 * 3. **Initials** is a simple "click to add initials" block.
 * 4. **Name** is a simple "Click to sign" block. This is the most common block of signature.
 * @export
 * @enum {string}
 */
export enum FieldEEzsignsignatureType {
    Acknowledgement = 'Acknowledgement',
    City = 'City',
    Handwritten = 'Handwritten',
    Initials = 'Initials',
    Name = 'Name'
}

export function FieldEEzsignsignatureTypeFromJSON(json: any): FieldEEzsignsignatureType {
    return FieldEEzsignsignatureTypeFromJSONTyped(json, false);
}

export function FieldEEzsignsignatureTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldEEzsignsignatureType {
    return json as FieldEEzsignsignatureType;
}

export function FieldEEzsignsignatureTypeToJSON(value?: FieldEEzsignsignatureType | null): any {
    return value as any;
}

