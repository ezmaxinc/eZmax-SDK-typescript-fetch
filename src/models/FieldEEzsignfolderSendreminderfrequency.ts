/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.31
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Frequency at which reminders will be sent to signers that haven't signed the documents
 * @export
 * @enum {string}
 */
export enum FieldEEzsignfolderSendreminderfrequency {
    None = 'None',
    Daily = 'Daily',
    Weekly = 'Weekly'
}

export function FieldEEzsignfolderSendreminderfrequencyFromJSON(json: any): FieldEEzsignfolderSendreminderfrequency {
    return FieldEEzsignfolderSendreminderfrequencyFromJSONTyped(json, false);
}

export function FieldEEzsignfolderSendreminderfrequencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldEEzsignfolderSendreminderfrequency {
    return json as FieldEEzsignfolderSendreminderfrequency;
}

export function FieldEEzsignfolderSendreminderfrequencyToJSON(value?: FieldEEzsignfolderSendreminderfrequency | null): any {
    return value as any;
}

