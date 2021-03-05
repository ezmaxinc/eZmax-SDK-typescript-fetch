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

import { exists, mapValues } from '../runtime';
import {
    FieldEUserTypeSSPR,
    FieldEUserTypeSSPRFromJSON,
    FieldEUserTypeSSPRFromJSONTyped,
    FieldEUserTypeSSPRToJSON,
} from './';

/**
 * Request for the /1/module/sspr/validateToken API Request
 * @export
 * @interface SsprValidateTokenV1Request
 */
export interface SsprValidateTokenV1Request {
    /**
     * The customer code assigned to your account
     * @type {string}
     * @memberof SsprValidateTokenV1Request
     */
    pksCustomerCode: string;
    /**
     * The unique ID of the Language.
     * 
     * Valid values:
     * 
     * |Value|Description|
     * |-|-|
     * |1|French|
     * |2|English|
     * @type {number}
     * @memberof SsprValidateTokenV1Request
     */
    fkiLanguageID: number;
    /**
     * 
     * @type {FieldEUserTypeSSPR}
     * @memberof SsprValidateTokenV1Request
     */
    eUserTypeSSPR: FieldEUserTypeSSPR;
    /**
     * The email address.
     * @type {string}
     * @memberof SsprValidateTokenV1Request
     */
    sEmailAddress?: string;
    /**
     * The Login name of the User.
     * @type {string}
     * @memberof SsprValidateTokenV1Request
     */
    sUserLoginname?: string;
    /**
     * Hex Encoded Secret SSPR token
     * @type {string}
     * @memberof SsprValidateTokenV1Request
     */
    binUserSSPRtoken: string;
}

export function SsprValidateTokenV1RequestFromJSON(json: any): SsprValidateTokenV1Request {
    return SsprValidateTokenV1RequestFromJSONTyped(json, false);
}

export function SsprValidateTokenV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SsprValidateTokenV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pksCustomerCode': json['pksCustomerCode'],
        'fkiLanguageID': json['fkiLanguageID'],
        'eUserTypeSSPR': FieldEUserTypeSSPRFromJSON(json['eUserTypeSSPR']),
        'sEmailAddress': !exists(json, 'sEmailAddress') ? undefined : json['sEmailAddress'],
        'sUserLoginname': !exists(json, 'sUserLoginname') ? undefined : json['sUserLoginname'],
        'binUserSSPRtoken': json['binUserSSPRtoken'],
    };
}

export function SsprValidateTokenV1RequestToJSON(value?: SsprValidateTokenV1Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pksCustomerCode': value.pksCustomerCode,
        'fkiLanguageID': value.fkiLanguageID,
        'eUserTypeSSPR': FieldEUserTypeSSPRToJSON(value.eUserTypeSSPR),
        'sEmailAddress': value.sEmailAddress,
        'sUserLoginname': value.sUserLoginname,
        'binUserSSPRtoken': value.binUserSSPRtoken,
    };
}

