import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

import weatherAPI from "../../api";

const sliceName = "weather";

export const fetchCurrentWeather = createAsyncThunk(
    `${sliceName}/fetchCurrentWeather`,
    ( query ) => weatherAPI.fetchCurrentWeather({ query }).then((payload) => weatherAPI.fetchWeatherForecast(payload.data.coord).then((forecast_payload) => {return {current: payload.data, forecast: forecast_payload.data}}))
);

export const fetchWeatherForecast = createAsyncThunk(
    `${sliceName}/fetchWeatherForecast`,
    ({ lat, lon }) => weatherAPI.fetchWeatherForecast({ lat, lon })
);

export const weatherSlice = createSlice({
    name: sliceName,
    initialState: {
        loading: true,
        error: false,
        data: null,
    },
    reducers: {},
    extraReducers: {
        [fetchCurrentWeather.pending]: (state, { payload, meta }) => {
            state.loading = true;
        },
        [fetchCurrentWeather.fulfilled]: (state, { payload, meta }) => {
            state.loading = false;
            state.error = false;
            state.data = payload;
            console.log(payload);
        },
        [fetchCurrentWeather.rejected]: (state, { error, meta }) => {
            state.loading = false;
            state.error = error;
        },
    },
});

export const selectLoading = (state) => state.weather.loading;
export const selectError = (state) => state.weather.error;
export const selectData = (state) => state.weather.data;

export default weatherSlice.reducer;
