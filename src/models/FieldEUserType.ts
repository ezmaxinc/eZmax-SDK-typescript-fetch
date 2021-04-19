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

/**
 * The user type of the User.
 * @export
 * @enum {string}
 */
export enum FieldEUserType {
    AgentBroker = 'AgentBroker',
    Assistant = 'Assistant',
    Attendance = 'Attendance',
    Customer = 'Customer',
    Employee = 'Employee',
    Ezcom = 'Ezcom',
    EzsignSigner = 'EzsignSigner',
    EzsignUser = 'EzsignUser',
    FranchiseCustomerServer = 'FranchiseCustomerServer',
    Normal = 'Normal',
    RewardAdministration = 'RewardAdministration',
    RewardMember = 'RewardMember',
    RewardRepresentative = 'RewardRepresentative',
    RewardCustomer = 'RewardCustomer',
    RewardDistributorServer = 'RewardDistributorServer',
    Supplier = 'Supplier',
    VetrxCustomer = 'VetrxCustomer',
    Vetrxcustomergroup = 'Vetrxcustomergroup',
    VetrxCustomerServer = 'VetrxCustomerServer',
    VetrxManufacturer = 'VetrxManufacturer',
    VetrxVendor = 'VetrxVendor'
}

export function FieldEUserTypeFromJSON(json: any): FieldEUserType {
    return FieldEUserTypeFromJSONTyped(json, false);
}

export function FieldEUserTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldEUserType {
    return json as FieldEUserType;
}

export function FieldEUserTypeToJSON(value?: FieldEUserType | null): any {
    return value as any;
}

