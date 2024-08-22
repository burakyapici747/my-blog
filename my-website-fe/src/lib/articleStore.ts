import {create} from 'zustand';
import ArticleYearGroup from "@/service/model/articleYearGroup";
import ArticleCategoryNameGroup from "@/service/model/articleCategoryNameGroup";

interface ArticleState {
    articles: [],
    articlesGroupedByYear: ArticleYearGroup,
    articlesGroupedByCategoryName: ArticleCategoryNameGroup,
    setArticlesGroupedByYear: (articleGroupedByYear: ArticleYearGroup) => void
    setArticlesGroupedByCategoryName: (articleCategoryNameGroup: ArticleCategoryNameGroup) => void
}

export const useArticleStore = create<ArticleState>((set) => ({
    articles: [],
    articlesGroupedByYear: {},
    articlesGroupedByCategoryName: {},
    setArticlesGroupedByYear: (articleGroupedByYear) => set((state) => ({articlesGroupedByYear: articleGroupedByYear})),
    setArticlesGroupedByCategoryName: (articleCategoryNameGroup: ArticleCategoryNameGroup) => set((state) => ({articlesGroupedByCategoryName: articleCategoryNameGroup}))
}));