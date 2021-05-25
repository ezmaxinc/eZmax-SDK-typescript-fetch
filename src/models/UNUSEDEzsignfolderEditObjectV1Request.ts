/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.43
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EzsignfolderRequest,
    EzsignfolderRequestFromJSON,
    EzsignfolderRequestFromJSONTyped,
    EzsignfolderRequestToJSON,
} from './';

/**
 * Request for the /1/object/ezsignfolder/editObject API Request
 * @export
 * @interface UNUSEDEzsignfolderEditObjectV1Request
 */
export interface UNUSEDEzsignfolderEditObjectV1Request {
    /**
     * 
     * @type {EzsignfolderRequest}
     * @memberof UNUSEDEzsignfolderEditObjectV1Request
     */
    objEzsignfolder?: EzsignfolderRequest;
}

export function UNUSEDEzsignfolderEditObjectV1RequestFromJSON(json: any): UNUSEDEzsignfolderEditObjectV1Request {
    return UNUSEDEzsignfolderEditObjectV1RequestFromJSONTyped(json, false);
}

export function UNUSEDEzsignfolderEditObjectV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UNUSEDEzsignfolderEditObjectV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsignfolder': !exists(json, 'objEzsignfolder') ? undefined : EzsignfolderRequestFromJSON(json['objEzsignfolder']),
    };
}

export function UNUSEDEzsignfolderEditObjectV1RequestToJSON(value?: UNUSEDEzsignfolderEditObjectV1Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsignfolder': EzsignfolderRequestToJSON(value.objEzsignfolder),
    };
}


