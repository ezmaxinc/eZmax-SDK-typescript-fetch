/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.44
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EzsignfoldersignerassociationRequest,
    EzsignfoldersignerassociationRequestFromJSON,
    EzsignfoldersignerassociationRequestFromJSONTyped,
    EzsignfoldersignerassociationRequestToJSON,
    EzsignsignerRequestCompound,
    EzsignsignerRequestCompoundFromJSON,
    EzsignsignerRequestCompoundFromJSONTyped,
    EzsignsignerRequestCompoundToJSON,
} from './';

/**
 * An Ezsignfoldersignerassociation Object and children to create a complete structure
 * @export
 * @interface EzsignfoldersignerassociationRequestCompound
 */
export interface EzsignfoldersignerassociationRequestCompound {
    /**
     * 
     * @type {EzsignsignerRequestCompound}
     * @memberof EzsignfoldersignerassociationRequestCompound
     */
    objEzsignsigner?: EzsignsignerRequestCompound;
    /**
     * A reference to a valid User.
     * 
     * This is only used if the signatory will be a user from the system.
     * @type {number}
     * @memberof EzsignfoldersignerassociationRequestCompound
     */
    fkiUserID?: number;
    /**
     * A reference to a valid Ezsignfolder.
     * 
     * That value is returned after a successful Ezsignfolder Creation.
     * @type {number}
     * @memberof EzsignfoldersignerassociationRequestCompound
     */
    fkiEzsignfolderID: number;
}

export function EzsignfoldersignerassociationRequestCompoundFromJSON(json: any): EzsignfoldersignerassociationRequestCompound {
    return EzsignfoldersignerassociationRequestCompoundFromJSONTyped(json, false);
}

export function EzsignfoldersignerassociationRequestCompoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfoldersignerassociationRequestCompound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsignsigner': !exists(json, 'objEzsignsigner') ? undefined : EzsignsignerRequestCompoundFromJSON(json['objEzsignsigner']),
        'fkiUserID': !exists(json, 'fkiUserID') ? undefined : json['fkiUserID'],
        'fkiEzsignfolderID': json['fkiEzsignfolderID'],
    };
}

export function EzsignfoldersignerassociationRequestCompoundToJSON(value?: EzsignfoldersignerassociationRequestCompound | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsignsigner': EzsignsignerRequestCompoundToJSON(value.objEzsignsigner),
        'fkiUserID': value.fkiUserID,
        'fkiEzsignfolderID': value.fkiEzsignfolderID,
    };
}


