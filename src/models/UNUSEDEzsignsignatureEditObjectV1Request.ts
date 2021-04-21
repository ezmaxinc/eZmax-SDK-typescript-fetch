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
import {
    EzsignsignatureRequest,
    EzsignsignatureRequestFromJSON,
    EzsignsignatureRequestFromJSONTyped,
    EzsignsignatureRequestToJSON,
} from './';

/**
 * Request for the /1/object/ezsignsignature/editObject API Request
 * @export
 * @interface UNUSEDEzsignsignatureEditObjectV1Request
 */
export interface UNUSEDEzsignsignatureEditObjectV1Request {
    /**
     * 
     * @type {EzsignsignatureRequest}
     * @memberof UNUSEDEzsignsignatureEditObjectV1Request
     */
    objEzsignsignature?: EzsignsignatureRequest;
}

export function UNUSEDEzsignsignatureEditObjectV1RequestFromJSON(json: any): UNUSEDEzsignsignatureEditObjectV1Request {
    return UNUSEDEzsignsignatureEditObjectV1RequestFromJSONTyped(json, false);
}

export function UNUSEDEzsignsignatureEditObjectV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UNUSEDEzsignsignatureEditObjectV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsignsignature': !exists(json, 'objEzsignsignature') ? undefined : EzsignsignatureRequestFromJSON(json['objEzsignsignature']),
    };
}

export function UNUSEDEzsignsignatureEditObjectV1RequestToJSON(value?: UNUSEDEzsignsignatureEditObjectV1Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsignsignature': EzsignsignatureRequestToJSON(value.objEzsignsignature),
    };
}


