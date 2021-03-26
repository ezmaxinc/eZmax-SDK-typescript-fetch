/* tslint:disable */
/* eslint-disable */
/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.39
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    UserCreateEzsignuserV1Request,
    UserCreateEzsignuserV1RequestFromJSON,
    UserCreateEzsignuserV1RequestToJSON,
    UserCreateEzsignuserV1Response,
    UserCreateEzsignuserV1ResponseFromJSON,
    UserCreateEzsignuserV1ResponseToJSON,
} from '../models';

export interface UserCreateEzsignuserV1OperationRequest {
    userCreateEzsignuserV1Request: Array<UserCreateEzsignuserV1Request>;
}

/**
 * 
 */
export class ModuleUserApi extends runtime.BaseAPI {

    /**
     * The endpoint allows to initiate the creation or a user of type Ezsignuser.  The user will be created only once the email verification process will be completed
     * Create a new User of type Ezsignuser
     */
    async userCreateEzsignuserV1Raw(requestParameters: UserCreateEzsignuserV1OperationRequest): Promise<runtime.ApiResponse<UserCreateEzsignuserV1Response>> {
        if (requestParameters.userCreateEzsignuserV1Request === null || requestParameters.userCreateEzsignuserV1Request === undefined) {
            throw new runtime.RequiredError('userCreateEzsignuserV1Request','Required parameter requestParameters.userCreateEzsignuserV1Request was null or undefined when calling userCreateEzsignuserV1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/1/module/user/createezsignuser`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.userCreateEzsignuserV1Request.map(UserCreateEzsignuserV1RequestToJSON),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserCreateEzsignuserV1ResponseFromJSON(jsonValue));
    }

    /**
     * The endpoint allows to initiate the creation or a user of type Ezsignuser.  The user will be created only once the email verification process will be completed
     * Create a new User of type Ezsignuser
     */
    async userCreateEzsignuserV1(requestParameters: UserCreateEzsignuserV1OperationRequest): Promise<UserCreateEzsignuserV1Response> {
        const response = await this.userCreateEzsignuserV1Raw(requestParameters);
        return await response.value();
    }

}
