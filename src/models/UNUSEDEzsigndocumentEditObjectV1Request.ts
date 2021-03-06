/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.46
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EzsigndocumentRequest,
    EzsigndocumentRequestFromJSON,
    EzsigndocumentRequestFromJSONTyped,
    EzsigndocumentRequestToJSON,
} from './';

/**
 * Request for the /1/object/ezsigndocument/editObject API Request
 * @export
 * @interface UNUSEDEzsigndocumentEditObjectV1Request
 */
export interface UNUSEDEzsigndocumentEditObjectV1Request {
    /**
     * 
     * @type {EzsigndocumentRequest}
     * @memberof UNUSEDEzsigndocumentEditObjectV1Request
     */
    objEzsigndocument?: EzsigndocumentRequest;
}

export function UNUSEDEzsigndocumentEditObjectV1RequestFromJSON(json: any): UNUSEDEzsigndocumentEditObjectV1Request {
    return UNUSEDEzsigndocumentEditObjectV1RequestFromJSONTyped(json, false);
}

export function UNUSEDEzsigndocumentEditObjectV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UNUSEDEzsigndocumentEditObjectV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsigndocument': !exists(json, 'objEzsigndocument') ? undefined : EzsigndocumentRequestFromJSON(json['objEzsigndocument']),
    };
}

export function UNUSEDEzsigndocumentEditObjectV1RequestToJSON(value?: UNUSEDEzsigndocumentEditObjectV1Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsigndocument': EzsigndocumentRequestToJSON(value.objEzsigndocument),
    };
}


