/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.31
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


