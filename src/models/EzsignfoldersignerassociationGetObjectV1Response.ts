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
} from './';

/**
 * Response for the /1/object/ezsignfoldersignerassociation/getObject API Request
 * @export
 * @interface EzsignfoldersignerassociationGetObjectV1Response
 */
export interface EzsignfoldersignerassociationGetObjectV1Response {
    /**
     * Payload for the /1/object/ezsignfoldersignerassociation/getObject API Request
     * @type {object}
     * @memberof EzsignfoldersignerassociationGetObjectV1Response
     */
    mPayload: object;
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof EzsignfoldersignerassociationGetObjectV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof EzsignfoldersignerassociationGetObjectV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function EzsignfoldersignerassociationGetObjectV1ResponseFromJSON(json: any): EzsignfoldersignerassociationGetObjectV1Response {
    return EzsignfoldersignerassociationGetObjectV1ResponseFromJSONTyped(json, false);
}

export function EzsignfoldersignerassociationGetObjectV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfoldersignerassociationGetObjectV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mPayload': json['mPayload'],
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function EzsignfoldersignerassociationGetObjectV1ResponseToJSON(value?: EzsignfoldersignerassociationGetObjectV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mPayload': value.mPayload,
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


