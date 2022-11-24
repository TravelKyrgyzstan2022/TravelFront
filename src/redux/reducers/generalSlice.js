import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerExtra } from "../extraReducers/authExtra";
import jwt_decode from "jwt-decode";
import axiosConfig from "../../utils/axiosConfig";

const initialState = {
  isLogged: false,
  user: null,
  status: "Active",
  error: null,
};

// export const login = createAsyncThunk(
//   "signin",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axiosConfig.login("signin", data);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data.message);
//     }
//   }
// );

export const login = createAsyncThunk("general/login", async (user, thunkAPI) => {
  try {
    return await axiosConfig.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const counterSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setLogout: (state) => {
      state.isLogged = false;
      state.user = null;
      localStorage.removeItem("jwt-token");
    },
    setLoginByGoogle: (state, action) => {
      state.isLogged = true;
      state.user = action.payload.user;
      localStorage.setItem("jwt-token", action.payload.token);
    },
  },
  extraReducers: {
      [login.pending]: (state) => {
        state.status = "Loggin in";
        state.error = null;
      },
      [login.fulfilled]: (state, action) => {
        state.status = "Active";
        state.error = null;
        state.isLogged = true;
        localStorage.setItem("jwt-token", action.payload);
        state.user = jwt_decode(action.payload.token);
      },
      [login.rejected]: (state, action) => {
        state.status = "Rejected login";
        state.error = action.payload;
      },
    registerExtra,
  },
});

export const { setLogout, setLoginByGoogle } = counterSlice.actions;
export default counterSlice.reducer;
