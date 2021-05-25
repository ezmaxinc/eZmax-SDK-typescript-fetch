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
    AddressRequest,
    AddressRequestFromJSON,
    AddressRequestFromJSONTyped,
    AddressRequestToJSON,
    ContactRequestCompound,
    ContactRequestCompoundFromJSON,
    ContactRequestCompoundFromJSONTyped,
    ContactRequestCompoundToJSON,
    FranchisereferalincomeRequest,
    FranchisereferalincomeRequestFromJSON,
    FranchisereferalincomeRequestFromJSONTyped,
    FranchisereferalincomeRequestToJSON,
} from './';

/**
 * A Franchisereferalincome Object and children to create a complete structure
 * @export
 * @interface FranchisereferalincomeRequestCompound
 */
export interface FranchisereferalincomeRequestCompound {
    /**
     * 
     * @type {AddressRequest}
     * @memberof FranchisereferalincomeRequestCompound
     */
    objAddress?: AddressRequest;
    /**
     * 
     * @type {Array<ContactRequestCompound>}
     * @memberof FranchisereferalincomeRequestCompound
     */
    a_objContact: Array<ContactRequestCompound>;
    /**
     * The unique ID of the Franchisebroker
     * @type {number}
     * @memberof FranchisereferalincomeRequestCompound
     */
    fkiFranchisebrokerID: number;
    /**
     * The unique ID of the Franchisereferalincomeprogram
     * @type {number}
     * @memberof FranchisereferalincomeRequestCompound
     */
    fkiFranchisereferalincomeprogramID: number;
    /**
     * The unique ID of the Period
     * @type {number}
     * @memberof FranchisereferalincomeRequestCompound
     */
    fkiPeriodID: number;
    /**
     * The loan amount
     * @type {string}
     * @memberof FranchisereferalincomeRequestCompound
     */
    dFranchisereferalincomeLoan: string;
    /**
     * The amount that will be given to the franchise
     * @type {string}
     * @memberof FranchisereferalincomeRequestCompound
     */
    dFranchisereferalincomeFranchiseamount: string;
    /**
     * The amount that will be kept by the franchisor
     * @type {string}
     * @memberof FranchisereferalincomeRequestCompound
     */
    dFranchisereferalincomeFranchisoramount: string;
    /**
     * The amount that will be given to the agent
     * @type {string}
     * @memberof FranchisereferalincomeRequestCompound
     */
    dFranchisereferalincomeAgentamount: string;
    /**
     * The date the amounts were disbursed
     * @type {string}
     * @memberof FranchisereferalincomeRequestCompound
     */
    dtFranchisereferalincomeDisbursed: string;
    /**
     * A comment about the transaction
     * @type {string}
     * @memberof FranchisereferalincomeRequestCompound
     */
    tFranchisereferalincomeComment: string;
    /**
     * The unique ID of the Franchisereoffice
     * @type {number}
     * @memberof FranchisereferalincomeRequestCompound
     */
    fkiFranchiseofficeID: number;
    /**
     * 
     * @type {string}
     * @memberof FranchisereferalincomeRequestCompound
     */
    sFranchisereferalincomeRemoteid: string;
}

export function FranchisereferalincomeRequestCompoundFromJSON(json: any): FranchisereferalincomeRequestCompound {
    return FranchisereferalincomeRequestCompoundFromJSONTyped(json, false);
}

export function FranchisereferalincomeRequestCompoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): FranchisereferalincomeRequestCompound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objAddress': !exists(json, 'objAddress') ? undefined : AddressRequestFromJSON(json['objAddress']),
        'a_objContact': ((json['a_objContact'] as Array<any>).map(ContactRequestCompoundFromJSON)),
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

export function FranchisereferalincomeRequestCompoundToJSON(value?: FranchisereferalincomeRequestCompound | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objAddress': AddressRequestToJSON(value.objAddress),
        'a_objContact': ((value.a_objContact as Array<any>).map(ContactRequestCompoundToJSON)),
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


