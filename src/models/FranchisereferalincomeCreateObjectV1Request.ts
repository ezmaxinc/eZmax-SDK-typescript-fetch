/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.23
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    FranchisereferalincomeRequest,
    FranchisereferalincomeRequestFromJSON,
    FranchisereferalincomeRequestFromJSONTyped,
    FranchisereferalincomeRequestToJSON,
    FranchisereferalincomeRequestCompound,
    FranchisereferalincomeRequestCompoundFromJSON,
    FranchisereferalincomeRequestCompoundFromJSONTyped,
    FranchisereferalincomeRequestCompoundToJSON,
} from './';

/**
 * Request for the /1/object/franchisereferalincome/createObject API Request
 * @export
 * @interface FranchisereferalincomeCreateObjectV1Request
 */
export interface FranchisereferalincomeCreateObjectV1Request {
    /**
     * 
     * @type {FranchisereferalincomeRequest}
     * @memberof FranchisereferalincomeCreateObjectV1Request
     */
    objFranchisereferalincome?: FranchisereferalincomeRequest;
    /**
     * 
     * @type {FranchisereferalincomeRequestCompound}
     * @memberof FranchisereferalincomeCreateObjectV1Request
     */
    objFranchisereferalincomeCompound?: FranchisereferalincomeRequestCompound;
}

export function FranchisereferalincomeCreateObjectV1RequestFromJSON(json: any): FranchisereferalincomeCreateObjectV1Request {
    return FranchisereferalincomeCreateObjectV1RequestFromJSONTyped(json, false);
}

export function FranchisereferalincomeCreateObjectV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FranchisereferalincomeCreateObjectV1Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objFranchisereferalincome': !exists(json, 'objFranchisereferalincome') ? undefined : FranchisereferalincomeRequestFromJSON(json['objFranchisereferalincome']),
        'objFranchisereferalincomeCompound': !exists(json, 'objFranchisereferalincomeCompound') ? undefined : FranchisereferalincomeRequestCompoundFromJSON(json['objFranchisereferalincomeCompound']),
    };
}

export function FranchisereferalincomeCreateObjectV1RequestToJSON(value?: FranchisereferalincomeCreateObjectV1Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objFranchisereferalincome': FranchisereferalincomeRequestToJSON(value.objFranchisereferalincome),
        'objFranchisereferalincomeCompound': FranchisereferalincomeRequestCompoundToJSON(value.objFranchisereferalincomeCompound),
    };
}


