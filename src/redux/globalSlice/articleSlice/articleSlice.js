import { createSlice } from "@reduxjs/toolkit";
import { getArticle, getArticleById } from "../../../api/articles";

const articleSlice = createSlice({
    name: 'article',
    initialState: {
        data:[],
        articleById: {},
        status: 'active',
        message: null,
    },
    reducers: {},
    extraReducers: {
        [getArticle.pending] : (state) => {
            state.status = 'loading';
        },
        [getArticle.fulfilled] : (state, action) => {
            state.status = 'active';
            state.data = action.payload;
            state.message = null
        },
        [getArticle.rejected] : (state, action) => {
            state.message = action.payload;
        },
        [getArticleById.pending]: (state) => {
            state.status = "loading";
        },
        [getArticleById.fulfilled]: (state, action) => {
            state.loading = "active";
            state.articleById = action.payload;
        },
        [getArticleById.rejected]: (state, action) => {
            state.loading = "active";
            state.error = action.payload;
        },
    }
}
)

export default articleSlice;