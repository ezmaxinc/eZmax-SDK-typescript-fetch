/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.42
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
 * Request for the /1/module/sspr/unlockAccountRequest API Request
 * @export
 * @interface SsprUnlockAccountRequestV1Request
 */
export interface SsprUnlockAccountRequestV1Request {
    /**
     * The customer code assigned to your account
     * @type {string}
     * @memberof SsprUnlockAccountRequestV1Request
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
     * @memberof SsprUnlockAccountRequestV1Request
     */
    fkiLanguageID: number;
    /**
     * 
     * @type {FieldEUserTypeSSPR}
     * @memberof SsprUnlockAccountRequestV1Request
     */
    eUserTypeSSPR: FieldEUserTypeSSPR;
    /**
     * The email address.
     * @type {string}
     * @memberof SsprUnlockAccountRequestV1Request
     */
    sEmailAddress?: string;
    /**
     * The Login name of the User.
     * @type {string}
     * @memberof SsprUnlockAccountRequestV1Request
     */
    sUserLoginname?: string;
}

export function SsprUnlockAccountRequestV1RequestFromJSON(json: any): SsprUnlockAccountRequestV1Request {
    return SsprUnlockAccountRequestV1RequestFromJSONTyped(json, false);
}

export function SsprUnlockAccountRequestV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SsprUnlockAccountRequestV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pksCustomerCode': json['pksCustomerCode'],
        'fkiLanguageID': json['fkiLanguageID'],
        'eUserTypeSSPR': FieldEUserTypeSSPRFromJSON(json['eUserTypeSSPR']),
        'sEmailAddress': !exists(json, 'sEmailAddress') ? undefined : json['sEmailAddress'],
        'sUserLoginname': !exists(json, 'sUserLoginname') ? undefined : json['sUserLoginname'],
    };
}

export function SsprUnlockAccountRequestV1RequestToJSON(value?: SsprUnlockAccountRequestV1Request | null): any {
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
    };
}


