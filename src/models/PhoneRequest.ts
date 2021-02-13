/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    FieldEPhoneType,
    FieldEPhoneTypeFromJSON,
    FieldEPhoneTypeFromJSONTyped,
    FieldEPhoneTypeToJSON,
} from './';

/**
 * A Phone Object
 * @export
 * @interface PhoneRequest
 */
export interface PhoneRequest {
    /**
     * The unique ID of the Phonetype.
     * 
     * Valid values:
     * 
     * |Value|Description|
     * |-|-|
     * |1|Office|
     * |2|Home|
     * |3|Mobile|
     * |4|Fax|
     * |5|Pager|
     * |6|Toll Free|
     * @type {number}
     * @memberof PhoneRequest
     */
    fkiPhonetypeID: number;
    /**
     * 
     * @type {FieldEPhoneType}
     * @memberof PhoneRequest
     */
    ePhoneType: FieldEPhoneType;
    /**
     * The region of the phone number. (For a North America Number only)
     * 
     * The region is the "514" section in this sample phone number: (514) 990-1516 x123
     * @type {string}
     * @memberof PhoneRequest
     */
    sPhoneRegion?: string;
    /**
     * The exchange of the phone number. (For a North America Number only)
     * 
     * The exchange is the "990" section in this sample phone number: (514) 990-1516 x123
     * @type {string}
     * @memberof PhoneRequest
     */
    sPhoneExchange?: string;
    /**
     * The number of the phone number. (For a North America Number only)
     * 
     * The number is the "1516" section in this sample phone number: (514) 990-1516 x123
     * @type {string}
     * @memberof PhoneRequest
     */
    sPhoneNumber?: string;
    /**
     * The international phone number. (For phone numbers outside of North)
     * 
     * Do not specify the "011" part of the phone number used to dial an international phone number from North America.
     * 
     * For example for this sample phone number "+442071838750", you would send "442071838750" without the "+" sign.
     * @type {string}
     * @memberof PhoneRequest
     */
    sPhoneInternational?: string;
    /**
     * The extension of the phone number.
     * 
     * The extension is the "123" section in this sample phone number: (514) 990-1516 x123.
     * 
     * It can also be used with international phone numbers
     * @type {string}
     * @memberof PhoneRequest
     */
    sPhoneExtension?: string;
}

export function PhoneRequestFromJSON(json: any): PhoneRequest {
    return PhoneRequestFromJSONTyped(json, false);
}

export function PhoneRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiPhonetypeID': json['fkiPhonetypeID'],
        'ePhoneType': FieldEPhoneTypeFromJSON(json['ePhoneType']),
        'sPhoneRegion': !exists(json, 'sPhoneRegion') ? undefined : json['sPhoneRegion'],
        'sPhoneExchange': !exists(json, 'sPhoneExchange') ? undefined : json['sPhoneExchange'],
        'sPhoneNumber': !exists(json, 'sPhoneNumber') ? undefined : json['sPhoneNumber'],
        'sPhoneInternational': !exists(json, 'sPhoneInternational') ? undefined : json['sPhoneInternational'],
        'sPhoneExtension': !exists(json, 'sPhoneExtension') ? undefined : json['sPhoneExtension'],
    };
}

export function PhoneRequestToJSON(value?: PhoneRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiPhonetypeID': value.fkiPhonetypeID,
        'ePhoneType': FieldEPhoneTypeToJSON(value.ePhoneType),
        'sPhoneRegion': value.sPhoneRegion,
        'sPhoneExchange': value.sPhoneExchange,
        'sPhoneNumber': value.sPhoneNumber,
        'sPhoneInternational': value.sPhoneInternational,
        'sPhoneExtension': value.sPhoneExtension,
    };
}


