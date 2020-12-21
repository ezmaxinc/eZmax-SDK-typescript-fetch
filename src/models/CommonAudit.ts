/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.21
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
     * The id of the User that created the object.
     * @type {number}
     * @memberof CommonAudit
     */
    fkiUserIDCreated: number;
    /**
     * The id of the User that made the last modification on the object.
     * @type {number}
     * @memberof CommonAudit
     */
    fkiUserIDModified: number;
    /**
     * The id of the API Key that created the object.
     * @type {number}
     * @memberof CommonAudit
     */
    fkiApikeyIDCreated?: number;
    /**
     * The id of the API Key that made the last modification on the object.
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


