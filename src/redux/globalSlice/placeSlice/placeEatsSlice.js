import { createSlice } from "@reduxjs/toolkit";
import { getEats } from "../../../api/place";

const placeEatsSlice = createSlice({
    name: 'eats',
    initialState: {
        data: [],
        status: "active",
        message: null
    },
    reducers: {},
    extraReducers: {
        [getEats.pending] : (state) => {
            state.status = "loading";
        },
        [getEats.fulfilled] : (state, action) => {
            state.status = "active";
            state.data = action.payload.data;
            state.message = null;


        },
        [getEats.rejected] : (state, action) => {
            state.message = action.payload;
        }
    }
})

export default placeEatsSlice;