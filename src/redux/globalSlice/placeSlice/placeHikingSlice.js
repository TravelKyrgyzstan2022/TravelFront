import { createSlice } from "@reduxjs/toolkit";
import { getHiking } from "../../../api/place";


const placeHikingSlice = createSlice({

    name: 'hiking',
    initialState: {
        data:[],
        status: 'active',
        message: null,
    },
    reducers: {},
    extraReducers: {
        [getHiking.pending] : (state) => {
            state.status = 'loading';
        },
        [getHiking.fulfilled] : (state, action) => {
            state.status = 'active';
            state.data = action.payload.data;
            state.message = null
        },
        [getHiking.rejected] : (state, action) => {
            state.message = action.payload;
        }
    }
}
)

export default placeHikingSlice;