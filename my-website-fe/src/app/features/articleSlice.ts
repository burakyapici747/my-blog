import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Article} from "../../../src/service/model/article";

export interface ArticleState {
    articles: Article[];
}

const initialState: ArticleState = {
    articles: []
};

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
    },
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;