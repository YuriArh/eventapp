import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewEvent } from "../../interfaces/NewEventInterface";
import { createEvent } from "../api/postApi";

const initialState: NewEvent = {
  isPosting: false,
};

const newEventSlice = createSlice({
  name: "newEvent",
  initialState,
  reducers: {
    addEventInfo: (state, action: PayloadAction<NewEvent>) => {
      const { name, desc, date, time } = action.payload;
      state.name = name;
      state.desc = desc;
      state.date = date;
      state.time = time;
    },
    addEventLocale: (state, action: PayloadAction<NewEvent>) => {
      const { long, lat } = action.payload;
      state.long = long;
      state.lat = lat;
    },
    cancelAddingEvent: (state) => {
      state = initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(createEvent.pending, (state, action) => {
      state.isPosting = true;
    });
    builder.addCase(createEvent.fulfilled, (state, action) => {
      state.isPosting = false;
    });
  },
});

export const { addEventInfo, addEventLocale, cancelAddingEvent } =
  newEventSlice.actions;

export default newEventSlice.reducer;
