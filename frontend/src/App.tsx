import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { useAppSelector } from "./hooks/reduxHook";

import Button from "./components/Button";
import MyMap from "./components/MyMap";
import LayoutModal from "./components/LayoutModal";
import NewEventForm from "./components/NewEventForm";
import "./App.css";

const AppStyle = createGlobalStyle`
${reset}

* {font-family: 'Roboto'}

`;

function App() {
  const modal = useAppSelector((state) => state.modal.modal);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <AppStyle />
      <MyMap />
      <Button />
      {modal && <LayoutModal>{<NewEventForm />}</LayoutModal>}
    </LocalizationProvider>
  );
}

export default App;
