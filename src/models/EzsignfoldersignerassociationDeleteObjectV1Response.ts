/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
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
 * Response for the /1/object/ezsignfoldersignerassociation/deleteObject API Request
 * @export
 * @interface EzsignfoldersignerassociationDeleteObjectV1Response
 */
export interface EzsignfoldersignerassociationDeleteObjectV1Response {
    /**
     * 
     * @type {CommonResponseObjDebugPayload}
     * @memberof EzsignfoldersignerassociationDeleteObjectV1Response
     */
    objDebugPayload?: CommonResponseObjDebugPayload;
    /**
     * 
     * @type {CommonResponseObjDebug}
     * @memberof EzsignfoldersignerassociationDeleteObjectV1Response
     */
    objDebug?: CommonResponseObjDebug;
}

export function EzsignfoldersignerassociationDeleteObjectV1ResponseFromJSON(json: any): EzsignfoldersignerassociationDeleteObjectV1Response {
    return EzsignfoldersignerassociationDeleteObjectV1ResponseFromJSONTyped(json, false);
}

export function EzsignfoldersignerassociationDeleteObjectV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfoldersignerassociationDeleteObjectV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objDebugPayload': !exists(json, 'objDebugPayload') ? undefined : CommonResponseObjDebugPayloadFromJSON(json['objDebugPayload']),
        'objDebug': !exists(json, 'objDebug') ? undefined : CommonResponseObjDebugFromJSON(json['objDebug']),
    };
}

export function EzsignfoldersignerassociationDeleteObjectV1ResponseToJSON(value?: EzsignfoldersignerassociationDeleteObjectV1Response | null): any {
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


