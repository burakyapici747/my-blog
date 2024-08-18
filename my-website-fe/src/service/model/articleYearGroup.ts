import {BaseResponseModel} from "@/service/model/baseResponseModel";
import {Article} from "@/service/model/article";

export default interface ArticleYearGroup<T>{
    [year: string]: BaseResponseModel<Article>[];
}