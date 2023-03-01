import { createSlice } from "@reduxjs/toolkit";
import { eventsState } from "../../interfaces/EventsInterface";
import { getEvents } from "../api/getApi";

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
