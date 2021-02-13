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
    AddressRequest,
    AddressRequestFromJSON,
    AddressRequestFromJSONTyped,
    AddressRequestToJSON,
    ContactinformationsRequest,
    ContactinformationsRequestFromJSON,
    ContactinformationsRequestFromJSONTyped,
    ContactinformationsRequestToJSON,
    EmailRequest,
    EmailRequestFromJSON,
    EmailRequestFromJSONTyped,
    EmailRequestToJSON,
    PhoneRequest,
    PhoneRequestFromJSON,
    PhoneRequestFromJSONTyped,
    PhoneRequestToJSON,
    WebsiteRequest,
    WebsiteRequestFromJSON,
    WebsiteRequestFromJSONTyped,
    WebsiteRequestToJSON,
} from './';

/**
 * A Contactinformations Object and children to create a complete structure
 * @export
 * @interface ContactinformationsRequestCompound
 */
export interface ContactinformationsRequestCompound {
    /**
     * 
     * @type {Array<AddressRequest>}
     * @memberof ContactinformationsRequestCompound
     */
    a_objAddress: Array<AddressRequest>;
    /**
     * 
     * @type {Array<PhoneRequest>}
     * @memberof ContactinformationsRequestCompound
     */
    a_objPhone: Array<PhoneRequest>;
    /**
     * 
     * @type {Array<EmailRequest>}
     * @memberof ContactinformationsRequestCompound
     */
    a_objEmail: Array<EmailRequest>;
    /**
     * 
     * @type {Array<WebsiteRequest>}
     * @memberof ContactinformationsRequestCompound
     */
    a_objWebsite: Array<WebsiteRequest>;
    /**
     * The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.
     * 
     * You can leave the value to 0 if the array is empty.
     * @type {number}
     * @memberof ContactinformationsRequestCompound
     */
    iAddressDefault: number;
    /**
     * The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.
     * 
     * You can leave the value to 0 if the array is empty.
     * @type {number}
     * @memberof ContactinformationsRequestCompound
     */
    iPhoneDefault: number;
    /**
     * The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.
     * 
     * You can leave the value to 0 if the array is empty.
     * @type {number}
     * @memberof ContactinformationsRequestCompound
     */
    iEmailDefault: number;
    /**
     * The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.
     * 
     * You can leave the value to 0 if the array is empty.
     * @type {number}
     * @memberof ContactinformationsRequestCompound
     */
    iWebsiteDefault: number;
}

export function ContactinformationsRequestCompoundFromJSON(json: any): ContactinformationsRequestCompound {
    return ContactinformationsRequestCompoundFromJSONTyped(json, false);
}

export function ContactinformationsRequestCompoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactinformationsRequestCompound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a_objAddress': ((json['a_objAddress'] as Array<any>).map(AddressRequestFromJSON)),
        'a_objPhone': ((json['a_objPhone'] as Array<any>).map(PhoneRequestFromJSON)),
        'a_objEmail': ((json['a_objEmail'] as Array<any>).map(EmailRequestFromJSON)),
        'a_objWebsite': ((json['a_objWebsite'] as Array<any>).map(WebsiteRequestFromJSON)),
        'iAddressDefault': json['iAddressDefault'],
        'iPhoneDefault': json['iPhoneDefault'],
        'iEmailDefault': json['iEmailDefault'],
        'iWebsiteDefault': json['iWebsiteDefault'],
    };
}

export function ContactinformationsRequestCompoundToJSON(value?: ContactinformationsRequestCompound | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a_objAddress': ((value.a_objAddress as Array<any>).map(AddressRequestToJSON)),
        'a_objPhone': ((value.a_objPhone as Array<any>).map(PhoneRequestToJSON)),
        'a_objEmail': ((value.a_objEmail as Array<any>).map(EmailRequestToJSON)),
        'a_objWebsite': ((value.a_objWebsite as Array<any>).map(WebsiteRequestToJSON)),
        'iAddressDefault': value.iAddressDefault,
        'iPhoneDefault': value.iPhoneDefault,
        'iEmailDefault': value.iEmailDefault,
        'iWebsiteDefault': value.iWebsiteDefault,
    };
}


