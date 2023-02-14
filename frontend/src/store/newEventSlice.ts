import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewEvent } from "../interfaces/NewEventInterface";

const initialState: NewEvent = {};

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
  },
});

export const { addEventInfo, addEventLocale } = newEventSlice.actions;

export default newEventSlice.reducer;
