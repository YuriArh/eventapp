import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LocaleState from "../interfaces/LocaleStateIntreface";
import axios from "axios";

export const getLocale = createAsyncThunk(
  "event/getLocale",
  async (long, lat) => {
    try {
      const response = await axios.get(
        `ttps://api.mapbox.com/geocoding/v5/mapbox.places}/${long},${lat}.json`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState: LocaleState = {
  locale: "",
  isLoading: false,
  hasError: false,
};

const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocale.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getLocale.fulfilled, (state, action) => {
        state.locale = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getLocale.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default localeSlice.reducer;
