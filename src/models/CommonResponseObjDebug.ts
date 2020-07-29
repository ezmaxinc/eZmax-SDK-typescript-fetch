/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.6
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CommonResponseObjSQLQuery,
    CommonResponseObjSQLQueryFromJSON,
    CommonResponseObjSQLQueryFromJSONTyped,
    CommonResponseObjSQLQueryToJSON,
} from './';

/**
 * This is a generic debug object that is returned by all API requests
 * @export
 * @interface CommonResponseObjDebug
 */
export interface CommonResponseObjDebug {
    /**
     * The peak memory allocated during the API request execution. Formatted as a human readable string
     * @type {string}
     * @memberof CommonResponseObjDebug
     */
    sMemoryUsage: string;
    /**
     * The total server execution time of the API request execution. Formatted as a human readable string
     * @type {string}
     * @memberof CommonResponseObjDebug
     */
    sRunTime: string;
    /**
     * The number of SQL SELECT queries that were sent to the database server during the API request execution
     * @type {number}
     * @memberof CommonResponseObjDebug
     */
    iSQLSelects: number;
    /**
     * The number of SQL INSERT/UPDATE/DELETE queries that were sent to the database server during the API request execution
     * @type {number}
     * @memberof CommonResponseObjDebug
     */
    iSQLQueries: number;
    /**
     * An array of the SQL Queries that were executed during the API request execution
     * @type {Array<CommonResponseObjSQLQuery>}
     * @memberof CommonResponseObjDebug
     */
    aObjSQLQuery: Array<CommonResponseObjSQLQuery>;
}

export function CommonResponseObjDebugFromJSON(json: any): CommonResponseObjDebug {
    return CommonResponseObjDebugFromJSONTyped(json, false);
}

export function CommonResponseObjDebugFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonResponseObjDebug {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sMemoryUsage': json['sMemoryUsage'],
        'sRunTime': json['sRunTime'],
        'iSQLSelects': json['iSQLSelects'],
        'iSQLQueries': json['iSQLQueries'],
        'aObjSQLQuery': ((json['a_objSQLQuery'] as Array<any>).map(CommonResponseObjSQLQueryFromJSON)),
    };
}

export function CommonResponseObjDebugToJSON(value?: CommonResponseObjDebug | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sMemoryUsage': value.sMemoryUsage,
        'sRunTime': value.sRunTime,
        'iSQLSelects': value.iSQLSelects,
        'iSQLQueries': value.iSQLQueries,
        'a_objSQLQuery': ((value.aObjSQLQuery as Array<any>).map(CommonResponseObjSQLQueryToJSON)),
    };
}


