/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.40
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * An Franchisereferalincome Object
 * @export
 * @interface FranchisereferalincomeRequest
 */
export interface FranchisereferalincomeRequest {
    /**
     * The unique ID of the Franchisebroker
     * @type {number}
     * @memberof FranchisereferalincomeRequest
     */
    fkiFranchisebrokerID: number;
    /**
     * The unique ID of the Franchisereferalincomeprogram
     * @type {number}
     * @memberof FranchisereferalincomeRequest
     */
    fkiFranchisereferalincomeprogramID: number;
    /**
     * The unique ID of the Period
     * @type {number}
     * @memberof FranchisereferalincomeRequest
     */
    fkiPeriodID: number;
    /**
     * The loan amount
     * @type {string}
     * @memberof FranchisereferalincomeRequest
     */
    dFranchisereferalincomeLoan: string;
    /**
     * The amount that will be given to the franchise
     * @type {string}
     * @memberof FranchisereferalincomeRequest
     */
    dFranchisereferalincomeFranchiseamount: string;
    /**
     * The amount that will be kept by the franchisor
     * @type {string}
     * @memberof FranchisereferalincomeRequest
     */
    dFranchisereferalincomeFranchisoramount: string;
    /**
     * The amount that will be given to the agent
     * @type {string}
     * @memberof FranchisereferalincomeRequest
     */
    dFranchisereferalincomeAgentamount: string;
    /**
     * The date the amounts were disbursed
     * @type {string}
     * @memberof FranchisereferalincomeRequest
     */
    dtFranchisereferalincomeDisbursed: string;
    /**
     * A comment about the transaction
     * @type {string}
     * @memberof FranchisereferalincomeRequest
     */
    tFranchisereferalincomeComment: string;
    /**
     * The unique ID of the Franchisereoffice
     * @type {number}
     * @memberof FranchisereferalincomeRequest
     */
    fkiFranchiseofficeID: number;
    /**
     * 
     * @type {string}
     * @memberof FranchisereferalincomeRequest
     */
    sFranchisereferalincomeRemoteid: string;
}

export function FranchisereferalincomeRequestFromJSON(json: any): FranchisereferalincomeRequest {
    return FranchisereferalincomeRequestFromJSONTyped(json, false);
}

export function FranchisereferalincomeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FranchisereferalincomeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fkiFranchisebrokerID': json['fkiFranchisebrokerID'],
        'fkiFranchisereferalincomeprogramID': json['fkiFranchisereferalincomeprogramID'],
        'fkiPeriodID': json['fkiPeriodID'],
        'dFranchisereferalincomeLoan': json['dFranchisereferalincomeLoan'],
        'dFranchisereferalincomeFranchiseamount': json['dFranchisereferalincomeFranchiseamount'],
        'dFranchisereferalincomeFranchisoramount': json['dFranchisereferalincomeFranchisoramount'],
        'dFranchisereferalincomeAgentamount': json['dFranchisereferalincomeAgentamount'],
        'dtFranchisereferalincomeDisbursed': json['dtFranchisereferalincomeDisbursed'],
        'tFranchisereferalincomeComment': json['tFranchisereferalincomeComment'],
        'fkiFranchiseofficeID': json['fkiFranchiseofficeID'],
        'sFranchisereferalincomeRemoteid': json['sFranchisereferalincomeRemoteid'],
    };
}

export function FranchisereferalincomeRequestToJSON(value?: FranchisereferalincomeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fkiFranchisebrokerID': value.fkiFranchisebrokerID,
        'fkiFranchisereferalincomeprogramID': value.fkiFranchisereferalincomeprogramID,
        'fkiPeriodID': value.fkiPeriodID,
        'dFranchisereferalincomeLoan': value.dFranchisereferalincomeLoan,
        'dFranchisereferalincomeFranchiseamount': value.dFranchisereferalincomeFranchiseamount,
        'dFranchisereferalincomeFranchisoramount': value.dFranchisereferalincomeFranchisoramount,
        'dFranchisereferalincomeAgentamount': value.dFranchisereferalincomeAgentamount,
        'dtFranchisereferalincomeDisbursed': value.dtFranchisereferalincomeDisbursed,
        'tFranchisereferalincomeComment': value.tFranchisereferalincomeComment,
        'fkiFranchiseofficeID': value.fkiFranchiseofficeID,
        'sFranchisereferalincomeRemoteid': value.sFranchisereferalincomeRemoteid,
    };
}


