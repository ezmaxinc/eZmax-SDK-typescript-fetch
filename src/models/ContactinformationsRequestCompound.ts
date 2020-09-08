/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.13
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
export interface ContactinformationsRequestCompound extends ContactinformationsRequest {
    /**
     * 
     * @type {Array<AddressRequest>}
     * @memberof ContactinformationsRequestCompound
     */
    aObjAddress: Array<AddressRequest>;
    /**
     * 
     * @type {Array<PhoneRequest>}
     * @memberof ContactinformationsRequestCompound
     */
    aObjPhone: Array<PhoneRequest>;
    /**
     * 
     * @type {Array<EmailRequest>}
     * @memberof ContactinformationsRequestCompound
     */
    aObjEmail: Array<EmailRequest>;
    /**
     * 
     * @type {Array<WebsiteRequest>}
     * @memberof ContactinformationsRequestCompound
     */
    aObjWebsite: Array<WebsiteRequest>;
}

export function ContactinformationsRequestCompoundFromJSON(json: any): ContactinformationsRequestCompound {
    return ContactinformationsRequestCompoundFromJSONTyped(json, false);
}

export function ContactinformationsRequestCompoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactinformationsRequestCompound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...ContactinformationsRequestFromJSONTyped(json, ignoreDiscriminator),
        'aObjAddress': ((json['a_objAddress'] as Array<any>).map(AddressRequestFromJSON)),
        'aObjPhone': ((json['a_objPhone'] as Array<any>).map(PhoneRequestFromJSON)),
        'aObjEmail': ((json['a_objEmail'] as Array<any>).map(EmailRequestFromJSON)),
        'aObjWebsite': ((json['a_objWebsite'] as Array<any>).map(WebsiteRequestFromJSON)),
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
        ...ContactinformationsRequestToJSON(value),
        'a_objAddress': ((value.aObjAddress as Array<any>).map(AddressRequestToJSON)),
        'a_objPhone': ((value.aObjPhone as Array<any>).map(PhoneRequestToJSON)),
        'a_objEmail': ((value.aObjEmail as Array<any>).map(EmailRequestToJSON)),
        'a_objWebsite': ((value.aObjWebsite as Array<any>).map(WebsiteRequestToJSON)),
    };
}


