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
    EzsignsignatureRequest,
    EzsignsignatureRequestFromJSON,
    EzsignsignatureRequestFromJSONTyped,
    EzsignsignatureRequestToJSON,
    EzsignsignatureRequestCompound,
    EzsignsignatureRequestCompoundFromJSON,
    EzsignsignatureRequestCompoundFromJSONTyped,
    EzsignsignatureRequestCompoundToJSON,
} from './';

/**
 * Request for the /1/object/ezsignsignature/createObject API Request
 * @export
 * @interface EzsignsignatureCreateObjectV1Request
 */
export interface EzsignsignatureCreateObjectV1Request {
    /**
     * 
     * @type {EzsignsignatureRequest}
     * @memberof EzsignsignatureCreateObjectV1Request
     */
    objEzsignsignature?: EzsignsignatureRequest;
    /**
     * 
     * @type {EzsignsignatureRequestCompound}
     * @memberof EzsignsignatureCreateObjectV1Request
     */
    objEzsignsignatureCompound?: EzsignsignatureRequestCompound;
}

export function EzsignsignatureCreateObjectV1RequestFromJSON(json: any): EzsignsignatureCreateObjectV1Request {
    return EzsignsignatureCreateObjectV1RequestFromJSONTyped(json, false);
}

export function EzsignsignatureCreateObjectV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignsignatureCreateObjectV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsignsignature': !exists(json, 'objEzsignsignature') ? undefined : EzsignsignatureRequestFromJSON(json['objEzsignsignature']),
        'objEzsignsignatureCompound': !exists(json, 'objEzsignsignatureCompound') ? undefined : EzsignsignatureRequestCompoundFromJSON(json['objEzsignsignatureCompound']),
    };
}

export function EzsignsignatureCreateObjectV1RequestToJSON(value?: EzsignsignatureCreateObjectV1Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsignsignature': EzsignsignatureRequestToJSON(value.objEzsignsignature),
        'objEzsignsignatureCompound': EzsignsignatureRequestCompoundToJSON(value.objEzsignsignatureCompound),
    };
}


