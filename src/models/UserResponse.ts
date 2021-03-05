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
    CommonAudit,
    CommonAuditFromJSON,
    CommonAuditFromJSONTyped,
    CommonAuditToJSON,
    FieldEUserType,
    FieldEUserTypeFromJSON,
    FieldEUserTypeFromJSONTyped,
    FieldEUserTypeToJSON,
    UserResponseAllOf,
    UserResponseAllOfFromJSON,
    UserResponseAllOfFromJSONTyped,
    UserResponseAllOfToJSON,
} from './';

/**
 * A User Object
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * The unique ID of the User
     * @type {number}
     * @memberof UserResponse
     */
    pkiUserID: number;
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
     * @memberof UserResponse
     */
    fkiLanguageID: number;
    /**
     * 
     * @type {FieldEUserType}
     * @memberof UserResponse
     */
    eUserType: FieldEUserType;
    /**
     * The First name of the user
     * @type {string}
     * @memberof UserResponse
     */
    sUserFirstname: string;
    /**
     * The Last name of the user
     * @type {string}
     * @memberof UserResponse
     */
    sUserLastname: string;
    /**
     * The Login name of the User.
     * @type {string}
     * @memberof UserResponse
     */
    sUserLoginname: string;
    /**
     * 
     * @type {CommonAudit}
     * @memberof UserResponse
     */
    objAudit: CommonAudit;
}

export function UserResponseFromJSON(json: any): UserResponse {
    return UserResponseFromJSONTyped(json, false);
}

export function UserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pkiUserID': json['pkiUserID'],
        'fkiLanguageID': json['fkiLanguageID'],
        'eUserType': FieldEUserTypeFromJSON(json['eUserType']),
        'sUserFirstname': json['sUserFirstname'],
        'sUserLastname': json['sUserLastname'],
        'sUserLoginname': json['sUserLoginname'],
        'objAudit': CommonAuditFromJSON(json['objAudit']),
    };
}

export function UserResponseToJSON(value?: UserResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pkiUserID': value.pkiUserID,
        'fkiLanguageID': value.fkiLanguageID,
        'eUserType': FieldEUserTypeToJSON(value.eUserType),
        'sUserFirstname': value.sUserFirstname,
        'sUserLastname': value.sUserLastname,
        'sUserLoginname': value.sUserLoginname,
        'objAudit': CommonAuditToJSON(value.objAudit),
    };
}


