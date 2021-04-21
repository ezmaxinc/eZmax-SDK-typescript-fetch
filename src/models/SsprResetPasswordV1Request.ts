/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.41
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
 * Request for the /1/module/sspr/resetPassword API Request
 * @export
 * @interface SsprResetPasswordV1Request
 */
export interface SsprResetPasswordV1Request {
    /**
     * The customer code assigned to your account
     * @type {string}
     * @memberof SsprResetPasswordV1Request
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
     * @memberof SsprResetPasswordV1Request
     */
    fkiLanguageID: number;
    /**
     * 
     * @type {FieldEUserTypeSSPR}
     * @memberof SsprResetPasswordV1Request
     */
    eUserTypeSSPR: FieldEUserTypeSSPR;
    /**
     * The email address.
     * @type {string}
     * @memberof SsprResetPasswordV1Request
     */
    sEmailAddress?: string;
    /**
     * The Login name of the User.
     * @type {string}
     * @memberof SsprResetPasswordV1Request
     */
    sUserLoginname?: string;
    /**
     * Hex Encoded Secret SSPR token
     * @type {string}
     * @memberof SsprResetPasswordV1Request
     */
    binUserSSPRtoken: string;
    /**
     * A Password.
     * 
     * Must meet complexity requirements
     * @type {string}
     * @memberof SsprResetPasswordV1Request
     */
    sPassword: string;
}

export function SsprResetPasswordV1RequestFromJSON(json: any): SsprResetPasswordV1Request {
    return SsprResetPasswordV1RequestFromJSONTyped(json, false);
}

export function SsprResetPasswordV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SsprResetPasswordV1Request {
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
        'sPassword': json['sPassword'],
    };
}

export function SsprResetPasswordV1RequestToJSON(value?: SsprResetPasswordV1Request | null): any {
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
        'sPassword': value.sPassword,
    };
}


