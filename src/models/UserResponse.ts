/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.28
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


