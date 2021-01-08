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

/**
 * The signature step of the Ezsignfolder.
 * @export
 * @enum {string}
 */
export enum FieldEEzsignfolderStep {
    Unsent = 'Unsent',
    Sent = 'Sent',
    PartiallySigned = 'PartiallySigned',
    Expired = 'Expired',
    Signed = 'Signed',
    Completed = 'Completed',
    Archived = 'Archived'
}

export function FieldEEzsignfolderStepFromJSON(json: any): FieldEEzsignfolderStep {
    return FieldEEzsignfolderStepFromJSONTyped(json, false);
}

export function FieldEEzsignfolderStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldEEzsignfolderStep {
    return json as FieldEEzsignfolderStep;
}

export function FieldEEzsignfolderStepToJSON(value?: FieldEEzsignfolderStep | null): any {
    return value as any;
}

