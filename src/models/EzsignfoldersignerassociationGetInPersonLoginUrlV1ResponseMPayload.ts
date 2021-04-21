/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.42
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Payload for the /1/object/ezsignfoldersignerassociation/getInPersonLoginUrl API Request
 * @export
 * @interface EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload
 */
export interface EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload {
    /**
     * The Url to login to the signing application.
     * 
     * Url will expire after 30 minutes.
     * @type {string}
     * @memberof EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload
     */
    sLoginUrl: string;
}

export function EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayloadFromJSON(json: any): EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload {
    return EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayloadFromJSONTyped(json, false);
}

export function EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sLoginUrl': json['sLoginUrl'],
    };
}

export function EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayloadToJSON(value?: EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sLoginUrl': value.sLoginUrl,
    };
}


