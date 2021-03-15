/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.33
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
} from './';

/**
 * Request for the /1/object/ezsignfoldersignerassociation/editObject API Request
 * @export
 * @interface UNUSEDEzsignfoldersignerassociationEditObjectV1Request
 */
export interface UNUSEDEzsignfoldersignerassociationEditObjectV1Request {
    /**
     * 
     * @type {EzsignfoldersignerassociationRequest}
     * @memberof UNUSEDEzsignfoldersignerassociationEditObjectV1Request
     */
    objEzsignfoldersignerassociation?: EzsignfoldersignerassociationRequest;
}

export function UNUSEDEzsignfoldersignerassociationEditObjectV1RequestFromJSON(json: any): UNUSEDEzsignfoldersignerassociationEditObjectV1Request {
    return UNUSEDEzsignfoldersignerassociationEditObjectV1RequestFromJSONTyped(json, false);
}

export function UNUSEDEzsignfoldersignerassociationEditObjectV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UNUSEDEzsignfoldersignerassociationEditObjectV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsignfoldersignerassociation': !exists(json, 'objEzsignfoldersignerassociation') ? undefined : EzsignfoldersignerassociationRequestFromJSON(json['objEzsignfoldersignerassociation']),
    };
}

export function UNUSEDEzsignfoldersignerassociationEditObjectV1RequestToJSON(value?: UNUSEDEzsignfoldersignerassociationEditObjectV1Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsignfoldersignerassociation': EzsignfoldersignerassociationRequestToJSON(value.objEzsignfoldersignerassociation),
    };
}


