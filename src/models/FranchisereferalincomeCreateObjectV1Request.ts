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


