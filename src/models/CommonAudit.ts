/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.39
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Gives informations about the user that created the object and the last user to have modified it.
 * 
 * If the object was never modified after creation, both Created and Modified informations will be the same.
 * 
 * Apikey details will only be provided if the changes were made by an API key.
 * @export
 * @interface CommonAudit
 */
export interface CommonAudit {
    /**
     * The unique ID of the User
     * @type {number}
     * @memberof CommonAudit
     */
    fkiUserIDCreated: number;
    /**
     * The unique ID of the User
     * @type {number}
     * @memberof CommonAudit
     */
    fkiUserIDModified: number;
    /**
     * The unique ID of the Apikey
     * @type {number}
     * @memberof CommonAudit
     */
    fkiApikeyIDCreated?: number;
    /**
     * The unique ID of the Apikey
     * @type {number}
     * @memberof CommonAudit
     */
    fkiApikeyIDModified?: number;
    /**
     * Represent a Date Time.
     * The timezone is the one configured in the User's profile.
     * @type {string}
     * @memberof CommonAudit
     */
    dtCreatedDate: string;
    /**
     * Represent a Date Time.
     * The timezone is the one configured in the User's profile.
     * @type {string}
     * @memberof CommonAudit
     */
    dtModifiedDate: string;
}

export function CommonAuditFromJSON(json: any): CommonAudit {
    return CommonAuditFromJSONTyped(json, false);
}

export function CommonAuditFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonAudit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiUserIDCreated': json['fkiUserIDCreated'],
        'fkiUserIDModified': json['fkiUserIDModified'],
        'fkiApikeyIDCreated': !exists(json, 'fkiApikeyIDCreated') ? undefined : json['fkiApikeyIDCreated'],
        'fkiApikeyIDModified': !exists(json, 'fkiApikeyIDModified') ? undefined : json['fkiApikeyIDModified'],
        'dtCreatedDate': json['dtCreatedDate'],
        'dtModifiedDate': json['dtModifiedDate'],
    };
}

export function CommonAuditToJSON(value?: CommonAudit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiUserIDCreated': value.fkiUserIDCreated,
        'fkiUserIDModified': value.fkiUserIDModified,
        'fkiApikeyIDCreated': value.fkiApikeyIDCreated,
        'fkiApikeyIDModified': value.fkiApikeyIDModified,
        'dtCreatedDate': value.dtCreatedDate,
        'dtModifiedDate': value.dtModifiedDate,
    };
}


