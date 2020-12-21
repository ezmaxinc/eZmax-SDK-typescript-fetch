/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.23
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


