abstract class BaseResponse<T>{
    message: string;
    isSuccess: boolean;
    httpStatus: number;
    data: T;

     protected constructor(message: string, isSuccess: boolean, httpStatus: number, data: T) {
        this.message = message;
        this.isSuccess = isSuccess;
        this.httpStatus = httpStatus;
        this.data = data;
    }
}

class ErrorResponse extends BaseResponse<null> {
    constructor(message: string, httpStatus: number) {
        super(message, false, httpStatus, null);
    }
}

class ErrorDataResponse<T> extends BaseResponse<T> {
    constructor(message: string, httpStatus: number, data: T) {
        super(message, false, httpStatus, data);
    }
}

class SuccessfulResponse extends BaseResponse<null>{
    constructor(message: string, httpStatus: number) {
        super(message, true, httpStatus, null);
    }
}

class SuccessfulDataResponse<T> extends BaseResponse<T>{
    constructor(message: string, httpStatus: number, data: T) {
        super(message, true, httpStatus, data);
    }
}

export {
    ErrorResponse,
    ErrorDataResponse,
    SuccessfulResponse,
    SuccessfulDataResponse,
    BaseResponse,
};