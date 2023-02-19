import { createSlice } from "@reduxjs/toolkit";
import Event from "../../interfaces/EventSliceInterface";
import { getEvents } from "../api/getApi";

type eventsState = {
  data: Event[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: eventsState = {
  data: [],
  isLoading: false,
  hasError: false,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default eventsSlice.reducer;
