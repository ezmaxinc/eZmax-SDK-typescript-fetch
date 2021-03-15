/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.35
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Payload for the /1/object/activesession/getCurrent API Request
 * @export
 * @interface ActivesessionGetCurrentV1ResponseMPayload
 */
export interface ActivesessionGetCurrentV1ResponseMPayload {
    /**
     * The customer code specific to the client in which the API request is being made
     * @type {string}
     * @memberof ActivesessionGetCurrentV1ResponseMPayload
     */
    sCustomerCode: string;
    /**
     * The type of session used for the API request call
     * @type {string}
     * @memberof ActivesessionGetCurrentV1ResponseMPayload
     */
    eActivesessionSessiontype: ActivesessionGetCurrentV1ResponseMPayloadEActivesessionSessiontypeEnum;
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
     * @memberof ActivesessionGetCurrentV1ResponseMPayload
     */
    fkiLanguageID: number;
    /**
     * The name of the active Company in the current language
     * @type {string}
     * @memberof ActivesessionGetCurrentV1ResponseMPayload
     */
    sCompanyNameX: string;
    /**
     * The name of the active Department in the current language
     * @type {string}
     * @memberof ActivesessionGetCurrentV1ResponseMPayload
     */
    sDepartmentNameX: string;
    /**
     * An Array of Registered modules.
     * 
     * These are the modules that are Licensed to be used by the User or the API Key.
     * @type {Array<string>}
     * @memberof ActivesessionGetCurrentV1ResponseMPayload
     */
    a_RegisteredModules: Array<string>;
    /**
     * An array of permissions granted to the user or api key
     * @type {Array<number>}
     * @memberof ActivesessionGetCurrentV1ResponseMPayload
     */
    a_Permissions: Array<number>;
    /**
     * The unique ID of the User
     * @type {number}
     * @memberof ActivesessionGetCurrentV1ResponseMPayload
     */
    fkiUserID: number;
    /**
     * The unique ID of the Apikey
     * @type {number}
     * @memberof ActivesessionGetCurrentV1ResponseMPayload
     */
    fkiApikeyID: number;
}

/**
* @export
* @enum {string}
*/
export enum ActivesessionGetCurrentV1ResponseMPayloadEActivesessionSessiontypeEnum {
    Normal = 'Normal'
}

export function ActivesessionGetCurrentV1ResponseMPayloadFromJSON(json: any): ActivesessionGetCurrentV1ResponseMPayload {
    return ActivesessionGetCurrentV1ResponseMPayloadFromJSONTyped(json, false);
}

export function ActivesessionGetCurrentV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivesessionGetCurrentV1ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sCustomerCode': json['sCustomerCode'],
        'eActivesessionSessiontype': json['eActivesessionSessiontype'],
        'fkiLanguageID': json['fkiLanguageID'],
        'sCompanyNameX': json['sCompanyNameX'],
        'sDepartmentNameX': json['sDepartmentNameX'],
        'a_RegisteredModules': json['a_RegisteredModules'],
        'a_Permissions': json['a_Permissions'],
        'fkiUserID': json['fkiUserID'],
        'fkiApikeyID': json['fkiApikeyID'],
    };
}

export function ActivesessionGetCurrentV1ResponseMPayloadToJSON(value?: ActivesessionGetCurrentV1ResponseMPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sCustomerCode': value.sCustomerCode,
        'eActivesessionSessiontype': value.eActivesessionSessiontype,
        'fkiLanguageID': value.fkiLanguageID,
        'sCompanyNameX': value.sCompanyNameX,
        'sDepartmentNameX': value.sDepartmentNameX,
        'a_RegisteredModules': value.a_RegisteredModules,
        'a_Permissions': value.a_Permissions,
        'fkiUserID': value.fkiUserID,
        'fkiApikeyID': value.fkiApikeyID,
    };
}


