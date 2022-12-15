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

export const getPlaceById = createAsyncThunk(
  "getPlaceById/data",
  async (id,{ rejectWithValue }) => {
    try {
      const res = await API.get(`api/v1/places/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
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
  }
)


export const getHiking = createAsyncThunk(
  'getHiking/place',
  async(data, {rejectWithValue}) => {
    try{
      const res = await API.get(
        'api/v1/places/filter?types=HIKING',
        data
        );
        return res;
      }catch(err){
        rejectWithValue(err.res.data.message)
      }
  }
)


export const getWaterFall = createAsyncThunk(
  'getWaterFall/place',
  async(data, {rejectWithValue}) => {
    try{
      const res = await API.get(
        'api/v1/places/filter?types=WATERFALL',
        data
        );
        return res;
      }catch(err){
        rejectWithValue(err.res.data.message)
      }
  }
)


export const getAlpinism = createAsyncThunk(
  'getAlpinism/place',
  async(data, {rejectWithValue}) => {
    try{
      const res = await API.get(
        'api/v1/places/filter?types=ALPINISM',
        data
        );
        return res;
      }catch(err){
        rejectWithValue(err.res.data.message)
      }
  }
)



export const getLake = createAsyncThunk(
  'getLake/place',
  async(data, {rejectWithValue}) => {
    try{
      const res = await API.get(
        'api/v1/places/filter?types=LAKE',
        data
        );
        return res;
      }catch(err){
        rejectWithValue(err.res.data.message)
      }
  }
)