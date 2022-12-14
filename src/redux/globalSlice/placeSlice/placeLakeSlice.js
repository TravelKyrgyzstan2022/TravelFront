import { createSlice } from "@reduxjs/toolkit";
import { getLake } from "../../../api/place";


const placeLakeSlice = createSlice({

    name: 'lake',
    initialState: {
        data:[],
        status: 'active',
        message: null,
    },
    reducers: {},
    extraReducers: {
        [getLake.pending] : (state) => {
            state.status = 'loading';
        },
        [getLake.fulfilled] : (state, action) => {
            state.status = 'active';
            state.data = action.payload.data;
            state.message = null
        },
        [getLake.rejected] : (state, action) => {
            state.message = action.payload;
        }
    }
}
)

export default placeLakeSlice;