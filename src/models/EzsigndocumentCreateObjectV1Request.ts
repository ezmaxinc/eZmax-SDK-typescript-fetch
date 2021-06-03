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
    EzsigndocumentRequestCompound,
    EzsigndocumentRequestCompoundFromJSON,
    EzsigndocumentRequestCompoundFromJSONTyped,
    EzsigndocumentRequestCompoundToJSON,
} from './';

/**
 * Request for the /1/object/ezsigndocument/createObject API Request
 * @export
 * @interface EzsigndocumentCreateObjectV1Request
 */
export interface EzsigndocumentCreateObjectV1Request {
    /**
     * 
     * @type {EzsigndocumentRequest}
     * @memberof EzsigndocumentCreateObjectV1Request
     */
    objEzsigndocument?: EzsigndocumentRequest;
    /**
     * 
     * @type {EzsigndocumentRequestCompound}
     * @memberof EzsigndocumentCreateObjectV1Request
     */
    objEzsigndocumentCompound?: EzsigndocumentRequestCompound;
}

export function EzsigndocumentCreateObjectV1RequestFromJSON(json: any): EzsigndocumentCreateObjectV1Request {
    return EzsigndocumentCreateObjectV1RequestFromJSONTyped(json, false);
}

export function EzsigndocumentCreateObjectV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsigndocumentCreateObjectV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsigndocument': !exists(json, 'objEzsigndocument') ? undefined : EzsigndocumentRequestFromJSON(json['objEzsigndocument']),
        'objEzsigndocumentCompound': !exists(json, 'objEzsigndocumentCompound') ? undefined : EzsigndocumentRequestCompoundFromJSON(json['objEzsigndocumentCompound']),
    };
}

export function EzsigndocumentCreateObjectV1RequestToJSON(value?: EzsigndocumentCreateObjectV1Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsigndocument': EzsigndocumentRequestToJSON(value.objEzsigndocument),
        'objEzsigndocumentCompound': EzsigndocumentRequestCompoundToJSON(value.objEzsigndocumentCompound),
    };
}


