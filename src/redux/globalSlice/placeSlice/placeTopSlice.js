import { createSlice } from "@reduxjs/toolkit";
import { getPlacesTop } from "../../../api/place";

const placesTopSlice = createSlice({
    name: "place",
    initialState: {
        data: [],
        status: "active",
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getPlacesTop.pending]: (state) => {
        state.status = "loading";
        },
        [getPlacesTop.fulfilled]: (state, action) => {
        state.loading = "active";
        state.data = action.payload;
        },
        [getPlacesTop.rejected]: (state, action) => {
        state.loading = "active";
        state.error = action.payload;
        },
}
})

export default placesTopSlice;