/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.37
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
 * Response for the /1/object/ezsignfoldersignerassociation/editObject API Request
 * @export
 * @interface UNUSEDEzsignfoldersignerassociationEditObjectV1Response
 */
export interface UNUSEDEzsignfoldersignerassociationEditObjectV1Response {
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof UNUSEDEzsignfoldersignerassociationEditObjectV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof UNUSEDEzsignfoldersignerassociationEditObjectV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function UNUSEDEzsignfoldersignerassociationEditObjectV1ResponseFromJSON(json: any): UNUSEDEzsignfoldersignerassociationEditObjectV1Response {
    return UNUSEDEzsignfoldersignerassociationEditObjectV1ResponseFromJSONTyped(json, false);
}

export function UNUSEDEzsignfoldersignerassociationEditObjectV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UNUSEDEzsignfoldersignerassociationEditObjectV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function UNUSEDEzsignfoldersignerassociationEditObjectV1ResponseToJSON(value?: UNUSEDEzsignfoldersignerassociationEditObjectV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objDebugPayload': CommonResponseObjDebugPayloadToJSON(value.objDebugPayload),
        'objDebug': CommonResponseObjDebugToJSON(value.objDebug),
    };
}


