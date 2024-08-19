import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ArticleYearGroup from "@/service/model/articleYearGroup";

export interface ArticleState {
    articles: ArticleYearGroup;
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
        setArticles: (state, action: PayloadAction<ArticleYearGroup>) => {
            state.articles = action.payload;
        },
    },
})

export const {setArticles} = articleSlice.actions

export default articleSlice.reducer
