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
 * An Ezsignfoldersignerassociation Object
 * @export
 * @interface EzsignfoldersignerassociationRequest
 */
export interface EzsignfoldersignerassociationRequest {
    /**
     * A reference to a valid User.
     * 
     * This is only used if the signatory will be a user from the system.
     * @type {number}
     * @memberof EzsignfoldersignerassociationRequest
     */
    fkiUserID?: number;
    /**
     * A reference to a valid Ezsignfolder.
     * 
     * That value is returned after a successful Ezsignfolder Creation.
     * @type {number}
     * @memberof EzsignfoldersignerassociationRequest
     */
    fkiEzsignfolderID: number;
}

export function EzsignfoldersignerassociationRequestFromJSON(json: any): EzsignfoldersignerassociationRequest {
    return EzsignfoldersignerassociationRequestFromJSONTyped(json, false);
}

export function EzsignfoldersignerassociationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfoldersignerassociationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiUserID': !exists(json, 'fkiUserID') ? undefined : json['fkiUserID'],
        'fkiEzsignfolderID': json['fkiEzsignfolderID'],
    };
}

export function EzsignfoldersignerassociationRequestToJSON(value?: EzsignfoldersignerassociationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiUserID': value.fkiUserID,
        'fkiEzsignfolderID': value.fkiEzsignfolderID,
    };
}

