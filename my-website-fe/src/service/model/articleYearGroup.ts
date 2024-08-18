import {Article} from "@/service/model/article";
import {BaseResponseModel} from "@/service/model/baseResponseModel";

export default interface ArticleYearGroup<T>{
    [year: string]: BaseResponseModel<Article>;
}