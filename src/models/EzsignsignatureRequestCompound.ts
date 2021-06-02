/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.45
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EzsignsignatureRequest,
    EzsignsignatureRequestFromJSON,
    EzsignsignatureRequestFromJSONTyped,
    EzsignsignatureRequestToJSON,
    FieldEEzsignsignatureType,
    FieldEEzsignsignatureTypeFromJSON,
    FieldEEzsignsignatureTypeFromJSONTyped,
    FieldEEzsignsignatureTypeToJSON,
} from './';

/**
 * An Ezsignsignature Object and children to create a complete structure
 * @export
 * @interface EzsignsignatureRequestCompound
 */
export interface EzsignsignatureRequestCompound {
    /**
     * The unique ID of the Ezsignfoldersignerassociation
     * @type {number}
     * @memberof EzsignsignatureRequestCompound
     */
    fkiEzsignfoldersignerassociationID: number;
    /**
     * The page number in the document where to apply the signature
     * @type {number}
     * @memberof EzsignsignatureRequestCompound
     */
    iEzsignpagePagenumber: number;
    /**
     * The X coordinate (Horizontal) where to put the signature block on the page.
     * 
     * Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use "200" for the X coordinate.
     * @type {number}
     * @memberof EzsignsignatureRequestCompound
     */
    iEzsignsignatureX: number;
    /**
     * The Y coordinate (Vertical) where to put the signature block on the page.
     * 
     * Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use "300" for the Y coordinate.
     * @type {number}
     * @memberof EzsignsignatureRequestCompound
     */
    iEzsignsignatureY: number;
    /**
     * The step when the Ezsignsigner will be invited to sign.
     * @type {number}
     * @memberof EzsignsignatureRequestCompound
     */
    iEzsignsignatureStep: number;
    /**
     * 
     * @type {FieldEEzsignsignatureType}
     * @memberof EzsignsignatureRequestCompound
     */
    eEzsignsignatureType: FieldEEzsignsignatureType;
    /**
     * The unique ID of the Ezsigntemplate
     * @type {number}
     * @memberof EzsignsignatureRequestCompound
     */
    fkiEzsigndocumentID: number;
}

export function EzsignsignatureRequestCompoundFromJSON(json: any): EzsignsignatureRequestCompound {
    return EzsignsignatureRequestCompoundFromJSONTyped(json, false);
}

export function EzsignsignatureRequestCompoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignsignatureRequestCompound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiEzsignfoldersignerassociationID': json['fkiEzsignfoldersignerassociationID'],
        'iEzsignpagePagenumber': json['iEzsignpagePagenumber'],
        'iEzsignsignatureX': json['iEzsignsignatureX'],
        'iEzsignsignatureY': json['iEzsignsignatureY'],
        'iEzsignsignatureStep': json['iEzsignsignatureStep'],
        'eEzsignsignatureType': FieldEEzsignsignatureTypeFromJSON(json['eEzsignsignatureType']),
        'fkiEzsigndocumentID': json['fkiEzsigndocumentID'],
    };
}

export function EzsignsignatureRequestCompoundToJSON(value?: EzsignsignatureRequestCompound | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiEzsignfoldersignerassociationID': value.fkiEzsignfoldersignerassociationID,
        'iEzsignpagePagenumber': value.iEzsignpagePagenumber,
        'iEzsignsignatureX': value.iEzsignsignatureX,
        'iEzsignsignatureY': value.iEzsignsignatureY,
        'iEzsignsignatureStep': value.iEzsignsignatureStep,
        'eEzsignsignatureType': FieldEEzsignsignatureTypeToJSON(value.eEzsignsignatureType),
        'fkiEzsigndocumentID': value.fkiEzsigndocumentID,
    };
}


