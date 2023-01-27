import { useEffect, useState } from "react";
import Map, { GeolocateControl, Popup, Marker } from "react-map-gl";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";

import { getEvents } from "../store/eventsSlice";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { Viewport, NewEvent } from "../interfaces/MyMapInterface";

import EventCard from "./EventCard";
import NewEventForm from "./NewEventForm";
import pin from "../icons/pin.png";

const MyImg = styled.img`
  width: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const MyMap = () => {
  const token: string | undefined = process.env.REACT_APP_MAPBOX_TOKEN;
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.events.data);

  const [popupID, setPopupID] = useState<string>("");
  const [newEvent, setNewEvent] = useState<NewEvent | null>(null);
  const [viewport, setViewport] = useState<Viewport>({
    latitude: 47,
    longitude: 13,
    zoom: 2,
  });

  const handleAddClick = (e: any) => {
    const lng = e.lngLat.lng;
    const lat = e.lngLat.lat;

    setPopupID("");

    setNewEvent({
      latitude: lat,
      longitude: lng,
    });
  };

  useEffect(() => {
    dispatch(getEvents());
  }, []);
  return (
    <Map
      initialViewState={viewport}
      style={{
        width: "100vw",
        height: "100vh",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={token}
      minZoom={2}
      doubleClickZoom={false}
      onDblClick={(e) => handleAddClick(e)}
    >
      <GeolocateControl trackUserLocation={true} />
      {data.map((event) => {
        return (
          <>
            <Marker
              // key={event.eventId}
              longitude={event.long}
              latitude={event.lat}
              // anchor="bottom"
              offset={[-3.5 * viewport.zoom, 7 * viewport.zoom]}
            >
              <MyImg src={pin} onClick={() => setPopupID(event.eventId)} />
            </Marker>
            {event.eventId === popupID && (
              <Popup
                key={event.eventId}
                latitude={event.lat}
                longitude={event.long}
                anchor="left"
                closeButton={true}
                closeOnClick={false}
                onClose={() => setPopupID("")}
                style={{}}
              >
                <EventCard
                  name={event.name}
                  desc={event.desc}
                  time={event.time}
                />
              </Popup>
            )}
            {/* {newEvent && (
              <Popup
                latitude={newEvent.latitude}
                longitude={newEvent.longitude}
                onClose={() => setNewEvent(null)}
              >
                <NewEventForm />
              </Popup>
            )} */}
          </>
        );
      })}
    </Map>
  );
};

export default MyMap;
