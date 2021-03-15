/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.35
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The signature step of the Ezsigndocument.
 * @export
 * @enum {string}
 */
export enum FieldEEzsigndocumentStep {
    Unsent = 'Unsent',
    Unsigned = 'Unsigned',
    PartiallySigned = 'PartiallySigned',
    Completed = 'Completed'
}

export function FieldEEzsigndocumentStepFromJSON(json: any): FieldEEzsigndocumentStep {
    return FieldEEzsigndocumentStepFromJSONTyped(json, false);
}

export function FieldEEzsigndocumentStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldEEzsigndocumentStep {
    return json as FieldEEzsigndocumentStep;
}

export function FieldEEzsigndocumentStepToJSON(value?: FieldEEzsigndocumentStep | null): any {
    return value as any;
}

