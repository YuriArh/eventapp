import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEvents = createAsyncThunk("events/getEvents", async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/event/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
