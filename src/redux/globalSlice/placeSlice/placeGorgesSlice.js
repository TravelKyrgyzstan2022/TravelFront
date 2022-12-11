import { createSlice } from "@reduxjs/toolkit";
import { getGorges } from "../../../api/place";

const placeGorgesSlice = createSlice({

    name: 'gorges',
    initialState: {
        data:[],
        status: 'active',
        message: null,
    },
    redducers: {},
    extraReducers: {
        [getGorges.pending] : (state) => {
            state.status = 'loading';
        },
        [getGorges.fulfilled] : (state, action) => {
            state.status = 'active';
            state.data = action.payload.data;
            state.message = null
        },
        [getGorges.rejected] : (state, action) => {
            state.message = action.payload;
        }
    }
}
)

export default placeGorgesSlice;