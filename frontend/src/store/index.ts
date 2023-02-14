import { configureStore } from "@reduxjs/toolkit";

import eventsReducer from "./eventsSlice";
import modalReducer from "./modalSlice";
import newEventReducer from "./newEventSlice";
import localeReducer from "./localeSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    modal: modalReducer,
    newEvent: newEventReducer,
    locale: localeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
