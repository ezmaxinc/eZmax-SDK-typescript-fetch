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

import { exists, mapValues } from '../runtime';
import {
    EzsignfolderResponse,
    EzsignfolderResponseFromJSON,
    EzsignfolderResponseFromJSONTyped,
    EzsignfolderResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface WebhookEzsignFolderCompletedAllOf
 */
export interface WebhookEzsignFolderCompletedAllOf {
    /**
     * 
     * @type {EzsignfolderResponse}
     * @memberof WebhookEzsignFolderCompletedAllOf
     */
    objEzsignfolder: EzsignfolderResponse;
}

export function WebhookEzsignFolderCompletedAllOfFromJSON(json: any): WebhookEzsignFolderCompletedAllOf {
    return WebhookEzsignFolderCompletedAllOfFromJSONTyped(json, false);
}

export function WebhookEzsignFolderCompletedAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookEzsignFolderCompletedAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objEzsignfolder': EzsignfolderResponseFromJSON(json['objEzsignfolder']),
    };
}

export function WebhookEzsignFolderCompletedAllOfToJSON(value?: WebhookEzsignFolderCompletedAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objEzsignfolder': EzsignfolderResponseToJSON(value.objEzsignfolder),
    };
}


