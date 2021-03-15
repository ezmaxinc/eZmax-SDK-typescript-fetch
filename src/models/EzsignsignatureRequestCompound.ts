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
    EzsignsignatureRequest,
    EzsignsignatureRequestFromJSON,
    EzsignsignatureRequestFromJSONTyped,
    EzsignsignatureRequestToJSON,
} from './';

/**
 * An Ezsignsignature Object and children to create a complete structure
 * @export
 * @interface EzsignsignatureRequestCompound
 */
export interface EzsignsignatureRequestCompound {
    /**
     * A reference to a valid Ezsignfoldersignerassociation.
     * 
     * That value is returned after a successful Ezsignfoldersignerassociation Creation.
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
     * 
     * For example, if you say iEzsignsignatureStep=2, that block of signature will be available for signature only after ALL the signatures in step 1 are completed.
     * @type {number}
     * @memberof EzsignsignatureRequestCompound
     */
    iEzsignsignatureStep: number;
    /**
     * The type of signature required.
     * 
     * 1. **Acknowledgement** is for an acknowledgment of receipt.
     * 2. **Handwritten** is for a handwritten kind of signature where users needs to "draw" their signature on screen.
     * 3. **Initials** is a simple "click to add initials" block.
     * 4. **Name** is a simple "Click to sign" block. This is the most common block of signature.
     * @type {string}
     * @memberof EzsignsignatureRequestCompound
     */
    eEzsignsignatureType: EzsignsignatureRequestCompoundEEzsignsignatureTypeEnum;
    /**
     * A reference to a valid Ezsigndocument.
     * 
     * That value is returned after a successful Ezsigndocumentation Creation.
     * @type {number}
     * @memberof EzsignsignatureRequestCompound
     */
    fkiEzsigndocumentID: number;
}

/**
* @export
* @enum {string}
*/
export enum EzsignsignatureRequestCompoundEEzsignsignatureTypeEnum {
    Acknowledgement = 'Acknowledgement',
    Handwritten = 'Handwritten',
    Initials = 'Initials',
    Name = 'Name'
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
        'eEzsignsignatureType': json['eEzsignsignatureType'],
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
        'eEzsignsignatureType': value.eEzsignsignatureType,
        'fkiEzsigndocumentID': value.fkiEzsigndocumentID,
    };
}


