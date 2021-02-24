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
import {
    CommonResponse,
    CommonResponseFromJSON,
    CommonResponseFromJSONTyped,
    CommonResponseToJSON,
    CommonResponseObjDebug,
    CommonResponseObjDebugFromJSON,
    CommonResponseObjDebugFromJSONTyped,
    CommonResponseObjDebugToJSON,
    CommonResponseObjDebugPayload,
    CommonResponseObjDebugPayloadFromJSON,
    CommonResponseObjDebugPayloadFromJSONTyped,
    CommonResponseObjDebugPayloadToJSON,
    EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload,
    EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayloadFromJSON,
    EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayloadFromJSONTyped,
    EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayloadToJSON,
} from './';

/**
 * Response for the /1/object/ezsignfoldersignerassociation/getInPersonLoginUrl API Request
 * @export
 * @interface EzsignfoldersignerassociationGetInPersonLoginUrlV1Response
 */
export interface EzsignfoldersignerassociationGetInPersonLoginUrlV1Response {
    /**
     * 
     * @type {EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload}
     * @memberof EzsignfoldersignerassociationGetInPersonLoginUrlV1Response
     */
    mPayload: EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload;
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof EzsignfoldersignerassociationGetInPersonLoginUrlV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof EzsignfoldersignerassociationGetInPersonLoginUrlV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseFromJSON(json: any): EzsignfoldersignerassociationGetInPersonLoginUrlV1Response {
    return EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseFromJSONTyped(json, false);
}

export function EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfoldersignerassociationGetInPersonLoginUrlV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mPayload': EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayloadFromJSON(json['mPayload']),
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseToJSON(value?: EzsignfoldersignerassociationGetInPersonLoginUrlV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mPayload': EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayloadToJSON(value.mPayload),
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


