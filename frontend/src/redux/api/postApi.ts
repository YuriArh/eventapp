import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewEvent } from "../../interfaces/NewEventInterface";
import axios from "axios";

export const createEvent = createAsyncThunk(
  "newEvent/createEvent",
  async (newEvent: NewEvent) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/event",
        newEvent
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
