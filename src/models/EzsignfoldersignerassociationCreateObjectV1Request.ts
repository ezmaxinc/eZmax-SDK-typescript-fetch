/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.46
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
    EzsignfoldersignerassociationRequestCompound,
    EzsignfoldersignerassociationRequestCompoundFromJSON,
    EzsignfoldersignerassociationRequestCompoundFromJSONTyped,
    EzsignfoldersignerassociationRequestCompoundToJSON,
} from './';

/**
 * Request for the /1/object/ezsignfoldersignerassociation/createObject API Request
 * @export
 * @interface EzsignfoldersignerassociationCreateObjectV1Request
 */
export interface EzsignfoldersignerassociationCreateObjectV1Request {
    /**
     * 
     * @type {EzsignfoldersignerassociationRequest}
     * @memberof EzsignfoldersignerassociationCreateObjectV1Request
     */
    objEzsignfoldersignerassociation?: EzsignfoldersignerassociationRequest;
    /**
     * 
     * @type {EzsignfoldersignerassociationRequestCompound}
     * @memberof EzsignfoldersignerassociationCreateObjectV1Request
     */
    objEzsignfoldersignerassociationCompound?: EzsignfoldersignerassociationRequestCompound;
}

export function EzsignfoldersignerassociationCreateObjectV1RequestFromJSON(json: any): EzsignfoldersignerassociationCreateObjectV1Request {
    return EzsignfoldersignerassociationCreateObjectV1RequestFromJSONTyped(json, false);
}

export function EzsignfoldersignerassociationCreateObjectV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfoldersignerassociationCreateObjectV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsignfoldersignerassociation': !exists(json, 'objEzsignfoldersignerassociation') ? undefined : EzsignfoldersignerassociationRequestFromJSON(json['objEzsignfoldersignerassociation']),
        'objEzsignfoldersignerassociationCompound': !exists(json, 'objEzsignfoldersignerassociationCompound') ? undefined : EzsignfoldersignerassociationRequestCompoundFromJSON(json['objEzsignfoldersignerassociationCompound']),
    };
}

export function EzsignfoldersignerassociationCreateObjectV1RequestToJSON(value?: EzsignfoldersignerassociationCreateObjectV1Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsignfoldersignerassociation': EzsignfoldersignerassociationRequestToJSON(value.objEzsignfoldersignerassociation),
        'objEzsignfoldersignerassociationCompound': EzsignfoldersignerassociationRequestCompoundToJSON(value.objEzsignfoldersignerassociationCompound),
    };
}


