import { createSlice } from "@reduxjs/toolkit";

type modalState = {
  modal: boolean;
};

const initialState: modalState = {
  modal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.modal = true;
    },
    closeModal(state) {
      state.modal = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
