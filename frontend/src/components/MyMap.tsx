import { useEffect, useState } from "react";
import Map, { GeolocateControl, Source, Marker } from "react-map-gl";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";

import { getEvents } from "../store/eventsSlice";
import { AppDispatch } from "../store";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import pin from "../img/pin.png";

const MyImg = styled.img`
  width: 35px;
`;

const MyMap = () => {
  const token: string | undefined = process.env.REACT_APP_MAPBOX_TOKEN;
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.events.data);

  useEffect(() => {
    dispatch(getEvents());
  }, []);
  return (
    <Map
      initialViewState={{
        zoom: 2,
      }}
      style={{
        width: "100vw",
        height: "100vh",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={token}
      minZoom={2}
    >
      <GeolocateControl trackUserLocation={true} />
      <Marker key={1} longitude={40} latitude={-90} anchor="bottom">
        <MyImg src={pin} />
      </Marker>
      ;
      {data.map((event) => {
        return (
          <Marker
            key={event.eventId}
            longitude={event.long}
            latitude={event.lat}
            anchor="bottom"
          >
            <MyImg src={pin} />
          </Marker>
        );
      })}
    </Map>
  );
};

export default MyMap;
