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
    EzsignsignatureRequest,
    EzsignsignatureRequestFromJSON,
    EzsignsignatureRequestFromJSONTyped,
    EzsignsignatureRequestToJSON,
} from './';

/**
 * Request for the /1/object/ezsignsignature/editObject API Request
 * @export
 * @interface EzsignsignatureEditObjectV1Request
 */
export interface EzsignsignatureEditObjectV1Request {
    /**
     * 
     * @type {EzsignsignatureRequest}
     * @memberof EzsignsignatureEditObjectV1Request
     */
    objEzsignsignature?: EzsignsignatureRequest;
}

export function EzsignsignatureEditObjectV1RequestFromJSON(json: any): EzsignsignatureEditObjectV1Request {
    return EzsignsignatureEditObjectV1RequestFromJSONTyped(json, false);
}

export function EzsignsignatureEditObjectV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignsignatureEditObjectV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsignsignature': !exists(json, 'objEzsignsignature') ? undefined : EzsignsignatureRequestFromJSON(json['objEzsignsignature']),
    };
}

export function EzsignsignatureEditObjectV1RequestToJSON(value?: EzsignsignatureEditObjectV1Request | null): any {
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


