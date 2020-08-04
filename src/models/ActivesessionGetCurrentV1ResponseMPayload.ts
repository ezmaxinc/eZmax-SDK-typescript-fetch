/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.8
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
     * Valid values are:
     * 1. French
     * 2. English
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
    aRegisteredModules: Array<string>;
    /**
     * An array of permissions granted to the user or api key
     * @type {Array<number>}
     * @memberof ActivesessionGetCurrentV1ResponseMPayload
     */
    aPermissions: Array<number>;
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
        'aRegisteredModules': json['a_RegisteredModules'],
        'aPermissions': json['a_Permissions'],
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
        'a_RegisteredModules': value.aRegisteredModules,
        'a_Permissions': value.aPermissions,
    };
}

/**
* @export
* @enum {string}
*/
export enum ActivesessionGetCurrentV1ResponseMPayloadEActivesessionSessiontypeEnum {
    Normal = 'Normal'
}

