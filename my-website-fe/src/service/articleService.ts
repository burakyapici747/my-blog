import {GET_REQUEST} from "@/service/genericService";
import {SuccessfulDataResponse} from "@/service/response/response";
import ArticleYearGroup from "@/service/model/articleYearGroup";

export const getAllGroupedAndDecreasedByYear = async (): Promise<ArticleYearGroup> => {
    const result: SuccessfulDataResponse<ArticleYearGroup> = await GET_REQUEST.SINGLE_WITH_PATH_VARIABLE("/article/grouped-by-year");
    return result.data;
}