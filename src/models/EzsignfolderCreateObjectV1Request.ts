/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.5
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


