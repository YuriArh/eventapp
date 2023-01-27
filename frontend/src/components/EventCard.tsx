import styled from "styled-components";
import EventCardProp from "../interfaces/EventCardInterface";

const CardDiv = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h4 {
    margin: 0;
    padding: 0;
  }
`;

const Name = styled.div`
  margin: 0;
  padding: 0;
`;

const Desc = styled.div``;

const Time = styled.div``;

const Label = styled.label`
  width: max-content;
  color: tomato;
  font-size: 13px;
  border-bottom: 0.5px solid tomato;
  margin: 3px 0;
`;

const EventCard = (props: EventCardProp) => {
  return (
    <CardDiv>
      <Label>Ивент</Label>
      <h4>{props.name}</h4>

      <Label>Описание</Label>
      {props.desc}

      <Label>Время</Label>
      {props.time}
    </CardDiv>
  );
};

export default EventCard;
