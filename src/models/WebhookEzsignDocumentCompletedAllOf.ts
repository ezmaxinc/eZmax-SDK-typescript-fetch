/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.46
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EzsigndocumentResponse,
    EzsigndocumentResponseFromJSON,
    EzsigndocumentResponseFromJSONTyped,
    EzsigndocumentResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface WebhookEzsignDocumentCompletedAllOf
 */
export interface WebhookEzsignDocumentCompletedAllOf {
    /**
     * 
     * @type {EzsigndocumentResponse}
     * @memberof WebhookEzsignDocumentCompletedAllOf
     */
    objEzsigndocument: EzsigndocumentResponse;
}

export function WebhookEzsignDocumentCompletedAllOfFromJSON(json: any): WebhookEzsignDocumentCompletedAllOf {
    return WebhookEzsignDocumentCompletedAllOfFromJSONTyped(json, false);
}

export function WebhookEzsignDocumentCompletedAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookEzsignDocumentCompletedAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsigndocument': EzsigndocumentResponseFromJSON(json['objEzsigndocument']),
    };
}

export function WebhookEzsignDocumentCompletedAllOfToJSON(value?: WebhookEzsignDocumentCompletedAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsigndocument': EzsigndocumentResponseToJSON(value.objEzsigndocument),
    };
}


