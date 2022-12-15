import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const getComment = createAsyncThunk(
    "getComment/data",
    async (id, { rejectWithValue }) => {
    try {
        const res = await API.get(`api/v1/places/${id}/comments`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response.data.message);
    }
    }
);


export const postComment = createAsyncThunk(
    "postComment/data",
    async (data, { rejectWithValue }) => {
    try {
        const res = await API.post(`api/v1/places/${data.id}/comment`, data.body);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response.data.message);
    }
    }
);