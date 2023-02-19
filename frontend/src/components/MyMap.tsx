import { useEffect, useState } from "react";
import Map, { GeolocateControl, Popup, Marker } from "react-map-gl";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";

import { addEventLocale } from "../redux/features/newEventSlice";
import { getLocale } from "../redux/api/getLocaleApi";
import { getEvents } from "../redux/api/getApi";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { Viewport, NewEvent } from "../interfaces/MyMapInterface";

import EventCard from "./EventCard";
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
  const locationInfo = useAppSelector((state) => state.modal.locationInfo);
  const isPosting = useAppSelector((state) => state.newEvent.isPosting);

  const [popupID, setPopupID] = useState<string>("");
  const [viewport, setViewport] = useState<Viewport>({
    latitude: 47,
    longitude: 13,
    zoom: 2,
  });

  const handleAddClick = (e: any) => {
    if (locationInfo) {
      const long = e.lngLat.lng;
      const lat = e.lngLat.lat;
      dispatch(getLocale({ long, lat }));
      dispatch(addEventLocale({ long, lat }));
    } else {
      return;
    }
  };

  useEffect(() => {
    dispatch(getEvents());
  }, [isPosting]);
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
      {data?.map((event) => {
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
          </>
        );
      })}
    </Map>
  );
};

export default MyMap;
