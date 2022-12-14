import { createSlice } from "@reduxjs/toolkit";
import { getAlpinism } from "../../../api/place";

const placeAlpinismSlice = createSlice({

    name: 'alpinism',
    initialState: {
        data:[],
        status: 'active',
        message: null,
    },
    reducers: {},
    extraReducers: {
        [getAlpinism.pending] : (state) => {
            state.status = 'loading';
        },
        [getAlpinism.fulfilled] : (state, action) => {
            state.status = 'active';
            state.data = action.payload.data;
            state.message = null
        },
        [getAlpinism.rejected] : (state, action) => {
            state.message = action.payload;
        }
    }
}
)

export default placeAlpinismSlice;