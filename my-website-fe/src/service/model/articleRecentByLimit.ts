import {Article} from "@/service/model/article";
import {BaseResponseModel} from "@/service/model/baseResponseModel";

export default interface ArticleRecentByLimit{
    data: BaseResponseModel<Article>[]
}