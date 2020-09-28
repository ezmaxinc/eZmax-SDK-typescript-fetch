/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * An Address Object
 * @export
 * @interface AddressRequest
 */
export interface AddressRequest {
    /**
     * The unique ID of the Addresstype.
     * 
     * Valid values:
     * 
     * |Value|Description|
     * |-|-|
     * |1|Office|
     * |2|Home|
     * |3|Real Estate Invoice|
     * |4|Invoicing|
     * |5|Shipping|
     * @type {number}
     * @memberof AddressRequest
     */
    fkiAddresstypeID: number;
    /**
     * The Civic number.
     * @type {string}
     * @memberof AddressRequest
     */
    sAddressCivic: string;
    /**
     * The Street Name
     * @type {string}
     * @memberof AddressRequest
     */
    sAddressStreet: string;
    /**
     * The Suite or appartment number
     * @type {string}
     * @memberof AddressRequest
     */
    sAddressSuite: string;
    /**
     * The City name
     * @type {string}
     * @memberof AddressRequest
     */
    sAddressCity: string;
    /**
     * The unique ID of the Province.
     * 
     * Here are some common values (Complete list must be retrieved from API):
     * 
     * |Value|Description|
     * |-|-|
     * |1|(Canada) Alberta
     * |2|(Canada) British Columbia|
     * |3|(Canada) Manitoba|
     * |3|(Canada) Manitoba|
     * |4|(Canada) New Brunswick|
     * |5|(Canada) Newfoundland|
     * |6|(Canada) Northwest Territories|
     * |7|(Canada) Nova Scotia|
     * |8|(Canada) Nunavut|
     * |9|(Canada) Ontario|
     * |10|(Canada) Prince Edward Island|
     * |11|(Canada) Quebec|
     * |12|(Canada) Saskatchewan|
     * |13|(Canada) Yukon|
     * |14|(United-States) Alabama|
     * |15|(United-States) Alaska|
     * |16|(United-States) Arizona|
     * |17|(United-States) Arkansas|
     * |18|(United-States) California|
     * |19|(United-States) Colorado|
     * |20|(United-States) Connecticut|
     * |21|(United-States) Delaware|
     * |22|(United-States) District of Columbia|
     * |23|(United-States) Florida|
     * |24|(United-States) Georgia|
     * |25|(United-States) Hawaii|
     * |26|(United-States) Idaho|
     * |27|(United-States) Illinois|
     * |28|(United-States) Indiana|
     * |29|(United-States) Iowa|
     * |30|(United-States) Kansas|
     * |31|(United-States) Kentucky|
     * |32|(United-States) Louisiane|
     * |33|(United-States) Maine|
     * |34|(United-States) Maryland|
     * |35|(United-States) Massachusetts|
     * |36|(United-States) Michigan|
     * |37|(United-States) Minnesota|
     * |38|(United-States) Mississippi|
     * |39|(United-States) Missouri|
     * |40|(United-States) Montana|
     * |41|(United-States) Nebraska|
     * |42|(United-States) Nevada|
     * |43|(United-States) New Hampshire|
     * |44|(United-States) New Jersey|
     * |45|(United-States) New Mexico|
     * |46|(United-States) New York|
     * |47|(United-States) North Carolina|
     * |48|(United-States) North Dakota|
     * |49|(United-States) Ohio|
     * |50|(United-States) Oklahoma|
     * |51|(United-States) Oregon|
     * |52|(United-States) Pennsylvania|
     * |53|(United-States) Rhode Island|
     * |54|(United-States) South Carolina|
     * |55|(United-States) South Dakota|
     * |56|(United-States) Tennessee|
     * |57|(United-States) Texas|
     * |58|(United-States) Utah|
     * |60|(United-States) Vermont|
     * |59|(United-States) Virginia|
     * |61|(United-States) Washington|
     * |62|(United-States) West Virginia|
     * |63|(United-States) Wisconsin|
     * |64|(United-States) Wyoming|
     * @type {number}
     * @memberof AddressRequest
     */
    fkiProvinceID: number;
    /**
     * The unique ID of the Country.
     * 
     * Here are some common values (Complete list must be retrieved from API):
     * 
     * |Value|Description|
     * |-|-|
     * |1|Canada|
     * |2|United-States|
     * @type {number}
     * @memberof AddressRequest
     */
    fkiCountryID: number;
    /**
     * The Postal/Zip Code
     * 
     * The value must be entered without spaces
     * @type {string}
     * @memberof AddressRequest
     */
    sAddressZip: string;
}

export function AddressRequestFromJSON(json: any): AddressRequest {
    return AddressRequestFromJSONTyped(json, false);
}

export function AddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiAddresstypeID': json['fkiAddresstypeID'],
        'sAddressCivic': json['sAddressCivic'],
        'sAddressStreet': json['sAddressStreet'],
        'sAddressSuite': json['sAddressSuite'],
        'sAddressCity': json['sAddressCity'],
        'fkiProvinceID': json['fkiProvinceID'],
        'fkiCountryID': json['fkiCountryID'],
        'sAddressZip': json['sAddressZip'],
    };
}

export function AddressRequestToJSON(value?: AddressRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiAddresstypeID': value.fkiAddresstypeID,
        'sAddressCivic': value.sAddressCivic,
        'sAddressStreet': value.sAddressStreet,
        'sAddressSuite': value.sAddressSuite,
        'sAddressCity': value.sAddressCity,
        'fkiProvinceID': value.fkiProvinceID,
        'fkiCountryID': value.fkiCountryID,
        'sAddressZip': value.sAddressZip,
    };
}


