import { createSlice } from "@reduxjs/toolkit";
import { getWaterFall } from "../../../api/place";


const placeWaterFallSlice = createSlice({

    name: 'waterfall',
    initialState: {
        data:[],
        status: 'active',
        message: null,
    },
    reducers: {},
    extraReducers: {
        [getWaterFall.pending] : (state) => {
            state.status = 'loading';
        },
        [getWaterFall.fulfilled] : (state, action) => {
            state.status = 'active';
            state.data = action.payload.data;
            state.message = null
        },
        [getWaterFall.rejected] : (state, action) => {
            state.message = action.payload;
        }
    }
}
)

export default placeWaterFallSlice;