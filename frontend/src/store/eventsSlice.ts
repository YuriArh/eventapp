import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Event from "../interfaces/EventSliceInterface";
import axios from "axios";

export const getEvents = createAsyncThunk("events/getEvents", async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/event/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

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
