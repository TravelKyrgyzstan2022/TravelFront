import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../utils/axiosConfig";

export const getUser = createAsyncThunk(
  "user/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await API.get("api/v1/admin/users");
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = payload;
    },
  },
});

export default userSlice;
