import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const getPlace = createAsyncThunk(
  "getPlace/data",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/places", arg);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getCommit = createAsyncThunk(
  "getCommit/data",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/places/2/comments", arg);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getStay = createAsyncThunk(
  "getStay/place",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.get("api/v1/places/filter?categories=STAY", arg);
      return res;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);

export const getSights = createAsyncThunk(
  "getSights/place",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.get(
        "api/v1/places/filter?categories=SIGHTSEEING",
        data
      );
      return response;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);


export const getEats = createAsyncThunk(
  'getEats/place',
  async (data, {rejectWithValue} ) => {
    try{
      const res = await API.get(
        'api/v1/places/filter?categories=EAT',
        data
      );
      return res;
    }catch(err){
      rejectWithValue(err.res.data.message)
    }
  }
)

export const getGorges = createAsyncThunk(
  'getGorges/place',
  async(data, {rejectWithValue}) => {
    try{
      const res = await API.get(
        'api/v1/places/filter?types=GORGE',
        data
        );
        return res;
      }catch(err){
        rejectWithValue(err.res.data.message)
      }
      console.log(data)
  }
)