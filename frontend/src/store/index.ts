import { configureStore } from "@reduxjs/toolkit";

import eventsReducer from "./eventsSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
