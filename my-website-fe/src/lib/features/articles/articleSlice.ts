import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ArticleYearGroup from "@/service/model/articleYearGroup";
import {Article} from "@/service/model/article";

export interface ArticleState {
    articles: ArticleYearGroup<Article>;
}

const initialState: ArticleState = {
    articles: {
        articles: []
    }
};

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticles: (state, action: PayloadAction<ArticleYearGroup<Article>>) => {
            state.articles = action.payload;
        },
    },
})

export const {setArticles} = articleSlice.actions

export default articleSlice.reducer
