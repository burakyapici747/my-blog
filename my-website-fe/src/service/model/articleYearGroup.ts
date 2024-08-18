import {Article} from "@/service/model/article";

export default interface ArticleYearGroup<T>{
    [year: string]: Article[];
}