import {GET_REQUEST} from "@/service/genericService";
import {SuccessfulDataResponse} from "@/service/response/response";
import ArticleYearGroup from "@/service/model/articleYearGroup";
import ArticleCategoryNameGroup from "@/service/model/articleCategoryNameGroup";
import ArticleRecentByLimit from "@/service/model/articleRecentByLimit";

export const getAllGroupedAndDecreasedByYear = async (): Promise<ArticleYearGroup> => {
    const result: SuccessfulDataResponse<ArticleYearGroup> = await GET_REQUEST.SINGLE_WITH_PATH_VARIABLE("/article/grouped-by-year");
    return result.data;
}

export const getAllGroupedByCategoryName = async (): Promise<ArticleCategoryNameGroup> => {
    const result: SuccessfulDataResponse<ArticleCategoryNameGroup> = await GET_REQUEST.SINGLE_WITH_PATH_VARIABLE("/category/grouped-articles");
    return result.data;
}

export const getRecentByLimit = async ():Promise<ArticleRecentByLimit> => {
    const result: SuccessfulDataResponse<ArticleRecentByLimit> = await GET_REQUEST.SINGLE_WITH_PATH_VARIABLE("/article/recent", ["5"])
    return result.data;
}