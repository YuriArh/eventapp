import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AnimatePresence } from "framer-motion";
import { useAppSelector, useAppDispatch } from "./hooks/reduxHook";
import { createEvent } from "./redux/api/postApi";
import { getEvents } from "./redux/api/getApi";

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
  const dispatch = useAppDispatch();

  const modal = useAppSelector((state) => state.modal.modal);
  const locationInfo = useAppSelector((state) => state.modal.locationInfo);
  const newEvent = useAppSelector((state) => state.newEvent);

  const handleCLick = () => {
    dispatch(createEvent(newEvent));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <AppStyle />
      <MyMap />
      <AnimatePresence>{!modal && !locationInfo && <Button />}</AnimatePresence>

      <AnimatePresence>
        {modal && <LayoutModal>{<NewEventForm />}</LayoutModal>}
      </AnimatePresence>
      <AnimatePresence>
        {locationInfo && <LocationInfo onLocationButton={handleCLick} />}
      </AnimatePresence>
    </LocalizationProvider>
  );
}

export default App;
