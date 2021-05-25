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
    EzsignfolderRequestCompound,
    EzsignfolderRequestCompoundFromJSON,
    EzsignfolderRequestCompoundFromJSONTyped,
    EzsignfolderRequestCompoundToJSON,
} from './';

/**
 * Request for the /1/object/ezsignfolder/createObject API Request
 * @export
 * @interface EzsignfolderCreateObjectV1Request
 */
export interface EzsignfolderCreateObjectV1Request {
    /**
     * 
     * @type {EzsignfolderRequest}
     * @memberof EzsignfolderCreateObjectV1Request
     */
    objEzsignfolder?: EzsignfolderRequest;
    /**
     * 
     * @type {EzsignfolderRequestCompound}
     * @memberof EzsignfolderCreateObjectV1Request
     */
    objEzsignfolderCompound?: EzsignfolderRequestCompound;
}

export function EzsignfolderCreateObjectV1RequestFromJSON(json: any): EzsignfolderCreateObjectV1Request {
    return EzsignfolderCreateObjectV1RequestFromJSONTyped(json, false);
}

export function EzsignfolderCreateObjectV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EzsignfolderCreateObjectV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsignfolder': !exists(json, 'objEzsignfolder') ? undefined : EzsignfolderRequestFromJSON(json['objEzsignfolder']),
        'objEzsignfolderCompound': !exists(json, 'objEzsignfolderCompound') ? undefined : EzsignfolderRequestCompoundFromJSON(json['objEzsignfolderCompound']),
    };
}

export function EzsignfolderCreateObjectV1RequestToJSON(value?: EzsignfolderCreateObjectV1Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsignfolder': EzsignfolderRequestToJSON(value.objEzsignfolder),
        'objEzsignfolderCompound': EzsignfolderRequestCompoundToJSON(value.objEzsignfolderCompound),
    };
}


