/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.25
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Definition of objSQLQuery Object
 * @export
 * @interface CommonResponseObjSQLQuery
 */
export interface CommonResponseObjSQLQuery {
    /**
     * The SQL Query
     * @type {string}
     * @memberof CommonResponseObjSQLQuery
     */
    sQuery: string;
    /**
     * Execution time of the SQL Query in seconds
     * @type {number}
     * @memberof CommonResponseObjSQLQuery
     */
    fDuration: number;
}

export function CommonResponseObjSQLQueryFromJSON(json: any): CommonResponseObjSQLQuery {
    return CommonResponseObjSQLQueryFromJSONTyped(json, false);
}

export function CommonResponseObjSQLQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonResponseObjSQLQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sQuery': json['sQuery'],
        'fDuration': json['fDuration'],
    };
}

export function CommonResponseObjSQLQueryToJSON(value?: CommonResponseObjSQLQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sQuery': value.sQuery,
        'fDuration': value.fDuration,
    };
}


