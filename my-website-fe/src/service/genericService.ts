import {
    getWithPathVariable,
    getWithRequestParameter,
    postWithPathVariable,
    postWithRequestParameter,
    putWithPathVariable,
    putWithRequestParameter,
    deleteWithPathVariable,
    deleteWithRequestParameter
} from "@/lib/axios";
import {
    BaseResponse,
    ErrorResponse,
    ErrorDataResponse,
    SuccessfulResponse,
    SuccessfulDataResponse,
} from "@/service/response/response";
import {AxiosResponse, AxiosError, AxiosRequestConfig} from "axios";

const genericDataRequestHandler = async <T>(axiosResponse: Promise<AxiosResponse>): Promise<BaseResponse<T>> => {
    try {
        const response = await axiosResponse;
        const successResponse = response.data as BaseResponse<T>;
        return new SuccessfulDataResponse<T>(successResponse.message, successResponse.httpStatus, successResponse.data);
    } catch (error) {
        const axiosError = error as AxiosError<BaseResponse<T>>;
        if (axiosError.response) {
            return Promise.reject(
                new ErrorDataResponse<T>(
                    axiosError.response.data.message,
                    axiosError.response.status,
                    axiosError.response.data.data
                )
            );
        } else {
            return Promise.reject(
                new ErrorResponse("An unexpected error occurred", 500)
            );
        }
    }
};

const genericRequestHandler = async <T>(axiosResponse: Promise<AxiosResponse>): Promise<BaseResponse<null>> => {
    try {
        const response = await axiosResponse;
        const successResponse = response.data as BaseResponse<T>;
        return new SuccessfulResponse(successResponse.message, successResponse.httpStatus);
    } catch (error) {
        const axiosError = error as AxiosError<BaseResponse<T>>;
        if (axiosError.response) {
            return Promise.reject(
                new ErrorResponse(
                    axiosError.response.data.message,
                    axiosError.response.status,
                )
            );
        } else {
            return Promise.reject(
                new ErrorResponse("An unexpected error occurred", 500)
            );
        }
    }
};

const getAllWithRequestParameter = async <T extends Object>(
    url: string,
    requestParameters: {[key: string]: any} = {}): Promise<BaseResponse<Array<T>>> => {
    return genericDataRequestHandler<Array<T>>(getWithRequestParameter(url, requestParameters));
};

const getAllWithPathVariable = async <T extends Object>(
    url: string,
    pathVariables: {[key: string]: any} = {}): Promise<BaseResponse<Array<T>>> => {
    return genericDataRequestHandler<Array<T>>(getWithPathVariable(url, pathVariables));
};

const getSingleWithRequestParameter = async <T extends Object>(
    url: string,
    requestParameters: {[key: string]: any} = {}): Promise<BaseResponse<T>> => {
    return genericDataRequestHandler<T>(getWithRequestParameter(url, requestParameters));
};

const getSingleWithPathVariable = async <T extends Object>(
    url: string,
    pathVariables: {[key: string]: any} = {}): Promise<BaseResponse<T>> => {
    return genericDataRequestHandler<T>(getWithPathVariable(url, pathVariables));
};

const postAllWithRequestParameter = async <T extends Object>(
    url: string,
    requestParameters: {[key: string]: any} = {},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<BaseResponse<Array<T>>> => {
    return genericDataRequestHandler<Array<T>>(postWithRequestParameter(url, requestParameters, requestBody, config));
};

const postAllWithPathVariable = async <T extends Object>(
    url: string,
    pathVariables: {[key: string]: any} = {},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<BaseResponse<Array<T>>> => {
    return genericDataRequestHandler<Array<T>>(postWithPathVariable(url, pathVariables, requestBody, config));
};

const postSingleWithRequestParameter = async <T extends Object>(
    url: string,
    requestParameters: {[key: string]: any} = {},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<BaseResponse<T>> => {
    return genericDataRequestHandler<T>(postWithRequestParameter(url, requestParameters, requestBody, config));
};

const postSingleWithPathVariable = async <T extends Object>(
    url: string,
    pathVariables: {[key: string]: any} = {},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<BaseResponse<T>> => {
    return genericDataRequestHandler<T>(postWithPathVariable(url, pathVariables, requestBody, config));
};

const putAllWithRequestParameter = async <T extends Object>(
    url: string,
    requestParameters: {[key: string]: any} = {},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<BaseResponse<Array<T>>> => {
    return genericDataRequestHandler<Array<T>>(putWithRequestParameter(url, requestParameters, requestBody, config));
};

const putAllWithPathVariable = async <T extends Object>(
    url: string,
    pathVariables: {[key: string]: any} = {},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<BaseResponse<Array<T>>> => {
    return genericDataRequestHandler<Array<T>>(putWithPathVariable(url, pathVariables, requestBody, config));
};

const putSingleWithRequestParameter = async <T extends Object>(
    url: string,
    requestParameters: {[key: string]: any} = {},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<BaseResponse<T>> => {
    return genericDataRequestHandler<T>(putWithRequestParameter(url, requestParameters, requestBody, config));
};

const putSingleWithPathVariable = async <T extends Object>(
    url: string,
    pathVariables: {[key: string]: any} = {},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<BaseResponse<T>> => {
    return genericDataRequestHandler<T>(putWithPathVariable(url, pathVariables, requestBody, config));
};

const deleteAllWithRequestParameter = async <T extends Object>(
    url: string,
    requestParameters: {[key: string]: any} = {}, config: AxiosRequestConfig = {}): Promise<BaseResponse<Array<T>>> => {
    return genericDataRequestHandler<Array<T>>(deleteWithRequestParameter(url, requestParameters, config));
};

const deleteAllWithPathVariable = async <T extends Object>(
    url: string,
    pathVariables: {[key: string]: any} = {}, config: AxiosRequestConfig = {}): Promise<BaseResponse<Array<T>>> => {
    return genericDataRequestHandler<Array<T>>(deleteWithPathVariable(url, pathVariables, config));
};

const deleteSingleWithRequestParameter = async <T extends Object>(
    url: string,
    requestParameters: {[key: string]: any} = {}, config: AxiosRequestConfig = {}): Promise<BaseResponse<T>> => {
    return genericDataRequestHandler<T>(deleteWithRequestParameter(url, requestParameters, config));
};

const deleteSingleWithPathVariable = async <T extends Object>(
    url: string,
    pathVariables: {[key: string]: any} = {}, config: AxiosRequestConfig = {}): Promise<BaseResponse<T>> => {
    return genericDataRequestHandler<T>(deleteWithPathVariable(url, pathVariables, config));
};

export const GET_REQUEST = {
    ALL_WITH_REQUEST_PARAMETER: getAllWithRequestParameter,
    ALL_WITH_PATH_VARIABLE: getAllWithPathVariable,
    SINGLE_WITH_REQUEST_PARAMETER: getSingleWithRequestParameter,
    SINGLE_WITH_PATH_VARIABLE: getSingleWithPathVariable,
};

export const POST_REQUEST = {
    ALL_WITH_REQUEST_PARAMETER: postAllWithRequestParameter,
    ALL_WITH_PATH_VARIABLE: postAllWithPathVariable,
    SINGLE_WITH_REQUEST_PARAMETER: postSingleWithRequestParameter,
    SINGLE_WITH_PATH_VARIABLE: postSingleWithPathVariable,
};

export const PUT_REQUEST = {
    ALL_WITH_REQUEST_PARAMETER: putAllWithRequestParameter,
    ALL_WITH_PATH_VARIABLE: putAllWithPathVariable,
    SINGLE_WITH_REQUEST_PARAMETER: putSingleWithRequestParameter,
    SINGLE_WITH_PATH_VARIABLE: putSingleWithPathVariable,
};

export const DELETE_REQUEST = {
    ALL_WITH_REQUEST_PARAMETER: deleteAllWithRequestParameter,
    ALL_WITH_PATH_VARIABLE: deleteAllWithPathVariable,
    SINGLE_WITH_REQUEST_PARAMETER: deleteSingleWithRequestParameter,
    SINGLE_WITH_PATH_VARIABLE: deleteSingleWithPathVariable,
};