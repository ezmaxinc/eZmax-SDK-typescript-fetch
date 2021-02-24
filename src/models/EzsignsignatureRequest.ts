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
 * An Ezsignsignature Object
 * @export
 * @interface EzsignsignatureRequest
 */
export interface EzsignsignatureRequest {
    /**
     * A reference to a valid Ezsignfoldersignerassociation.
     * 
     * That value is returned after a successful Ezsignfoldersignerassociation Creation.
     * @type {number}
     * @memberof EzsignsignatureRequest
     */
    fkiEzsignfoldersignerassociationID: number;
    /**
     * The page number in the document where to apply the signature
     * @type {number}
     * @memberof EzsignsignatureRequest
     */
    iEzsignpagePagenumber: number;
    /**
     * The X coordinate (Horizontal) where to put the signature block on the page.
     * 
     * Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use "200" for the X coordinate.
     * @type {number}
     * @memberof EzsignsignatureRequest
     */
    iEzsignsignatureX: number;
    /**
     * The Y coordinate (Vertical) where to put the signature block on the page.
     * 
     * Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use "300" for the Y coordinate.
     * @type {number}
     * @memberof EzsignsignatureRequest
     */
    iEzsignsignatureY: number;
    /**
     * The step when the Ezsignsigner will be invited to sign.
     * 
     * For example, if you say iEzsignsignatureStep=2, that block of signature will be available for signature only after ALL the signatures in step 1 are completed.
     * @type {number}
     * @memberof EzsignsignatureRequest
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
     * @memberof EzsignsignatureRequest
     */
    eEzsignsignatureType: EzsignsignatureRequestEEzsignsignatureTypeEnum;
    /**
     * A reference to a valid Ezsigndocument.
     * 
     * That value is returned after a successful Ezsigndocumentation Creation.
     * @type {number}
     * @memberof EzsignsignatureRequest
     */
    fkiEzsigndocumentID: number;
}

/**
* @export
* @enum {string}
*/
export enum EzsignsignatureRequestEEzsignsignatureTypeEnum {
    Acknowledgement = 'Acknowledgement',
    Handwritten = 'Handwritten',
    Initials = 'Initials',
    Name = 'Name'
}

export function EzsignsignatureRequestFromJSON(json: any): EzsignsignatureRequest {
    return EzsignsignatureRequestFromJSONTyped(json, false);
}

export function EzsignsignatureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignsignatureRequest {
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

export function EzsignsignatureRequestToJSON(value?: EzsignsignatureRequest | null): any {
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


