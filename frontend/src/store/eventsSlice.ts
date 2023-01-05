import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEvents = createAsyncThunk("pics/getEvents", async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/event/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

type Event = {
  eventId: string;
  name: string;
  long: number;
  lat: number;
  img: string;
  desc: string;
  time: number;
};

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
