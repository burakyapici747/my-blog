import axiosInstance from "../config/axios";
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";


const createFullURLForRequestParameter = (requestParameters: {[key: string]: any}): string => {
    let result: string = "?";
    Object.keys(requestParameters).forEach(key => {
        result = result + key + "=" + requestParameters[key] + "&";
    });

    return result.substring(0, result.length - 1);
};

const createFullURLForPathVariable = (pathVariables: {[key: string]: any}): string  => {
    let result: string = "/";
    Object.keys(pathVariables).forEach(key => {
        result = result + key + pathVariables[key] + "/";
    });

    return result.substring(0, result.length - 1);
}

export const getWithRequestParameter = (
    url: string,
    requestParameters: {[key: string]: any},
    config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    let fullURL = url + createFullURLForRequestParameter(requestParameters);

    if(Object.keys(config).length === 0) {
        return axiosInstance.get(fullURL);
    }else {
        return axiosInstance.get(fullURL, config);
    }
}

export const getWithPathVariable = (
    url: string,
    pathVariables: {[key: string]: any},
    config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    let fullURL = url + createFullURLForPathVariable(pathVariables);

    if(Object.keys(config).length === 0) {
        return axiosInstance.get(fullURL);
    }else {
        return axiosInstance.get(fullURL, config);
    }
}

export const postWithRequestParameter = (
    url: string,
    requestParameters: {[key: string]: any},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL = url + createFullURLForRequestParameter(requestParameters);

    if(Object.keys(config).length === 0) {
        return axiosInstance.post(fullURL,requestBody);
    }else {
        return axiosInstance.post(fullURL, requestBody, config);
    }
};

export const postWithPathVariable = (
    url: string,
    pathVariables: {[key: string]: any},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL = url + createFullURLForPathVariable(pathVariables);

    if(Object.keys(config).length === 0) {
        return axiosInstance.post(fullURL,requestBody);
    }else {
        return axiosInstance.post(fullURL, requestBody, config);
    }
};

export const putWithRequestParameter = (
    url: string,
    requestParameters: {[key: string]: any},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL: string = url + createFullURLForRequestParameter(requestParameters);

    if(Object.keys(config).length === 0){
        return axiosInstance.put(fullURL, requestBody);
    }else{
        return axiosInstance.put(fullURL, requestBody, config);
    }
}

export const putWithPathVariable = (
    url: string,
    pathVariables: {[key: string]: any},
    requestBody: Object, config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL: string = url + createFullURLForPathVariable(pathVariables);

    if(Object.keys(config).length === 0){
        return axiosInstance.put(fullURL, requestBody);
    }else{
        return axiosInstance.put(url, requestBody, config);
    }
}

export const deleteWithRequestParameter = (
    url: string,
    requestParameters: {[key: string]: any},
    config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL = url + createFullURLForRequestParameter(requestParameters);

    if(Object.keys(config).length === 0){
        return axiosInstance.delete(fullURL);
    }else{
        return axiosInstance.delete(fullURL, config);
    }
}

export const deleteWithPathVariable = (
    url: string,
    pathVariables: {[key: string]: any},
    config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL: string = url + createFullURLForPathVariable(pathVariables);

    if(Object.keys(config).length === 0){
        return axiosInstance.delete(fullURL);
    }else{
        return axiosInstance.delete(fullURL, config);
    }
}