import {GET_REQUEST} from "@/service/genericService";
import {Article} from "@/service/model/article";
import {SuccessfulDataResponse} from "@/service/response/response";
import ArticleYearGroup from "@/service/model/ArticleYearGroup";

export const getAllGroupedAndDecreasedByYear = async (): Promise<ArticleYearGroup<Article>> => {
    const result: SuccessfulDataResponse<ArticleYearGroup<Article>> = await GET_REQUEST.SINGLE_WITH_PATH_VARIABLE("/article/grouped-by-year");
    return result.data;
}