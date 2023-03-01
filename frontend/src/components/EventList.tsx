import styled from "styled-components";
import { EventListProps } from "../interfaces/EventListProps";
import EventItem from "./EventItem";

const EventListDiv = styled.div`
  height: 100vh;
  width: 25vw;
  overflow-y: scroll;
  position: absolute;
  left: 0;
  top: 0;
`;

const EventList = (props: EventListProps) => {
  return (
    <EventListDiv>
      {props.data?.map((item) => {
        return <EventItem eventData={item} />;
      })}
    </EventListDiv>
  );
};

export default EventList;
