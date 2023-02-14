import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "./hooks/reduxHook";

import Button from "./components/Button";
import MyMap from "./components/MyMap";
import LayoutModal from "./components/LayoutModal";
import NewEventForm from "./components/NewEventForm";
import LocationInfo from "./components/LocationInfo";
import "./App.css";

const AppStyle = createGlobalStyle`
${reset}

* {font-family: 'Roboto'}
body {
  overflow: hidden
}
`;

function App() {
  const modal = useAppSelector((state) => state.modal.modal);
  const locationInfo = useAppSelector((state) => state.modal.locationInfo);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <AppStyle />
      <MyMap />
      <AnimatePresence>{!modal && !locationInfo && <Button />}</AnimatePresence>

      <AnimatePresence>
        {modal && <LayoutModal>{<NewEventForm />}</LayoutModal>}
      </AnimatePresence>
      <AnimatePresence>{locationInfo && <LocationInfo />}</AnimatePresence>
    </LocalizationProvider>
  );
}

export default App;
