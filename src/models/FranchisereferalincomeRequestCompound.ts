/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.28
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


