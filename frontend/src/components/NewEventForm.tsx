import { useState } from "react";
import styled from "styled-components";
import { DatePicker, ClockPicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

import "react-datepicker/dist/react-datepicker.css";

const NewEventFormDiv = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const Input = styled.input`
  border: none;
  border-radius: 20px;
  background-color: rgba(230, 230, 230, 0.3);
  padding: 10px;
  outline: none;
`;

const Label = styled.label`
  color: black;
  font-weight: 500;
  font-family: "Roboto";
  margin: 15px 0 5px 0;
`;

const Textarea = styled.textarea`
  resize: none;
  border: none;
  border-radius: 20px;
  background-color: rgba(230, 230, 230, 0.3);
  padding: 10px;
  outline: none;
`;

// const WrapperDatePicker = styled(DatePicker)`
//   display: none;
// `;

const NewEventForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <NewEventFormDiv>
      <Form>
        <Label>Title</Label>
        <Input placeholder="Введите название ивента"></Input>
        <Label>Описание</Label>
        <Textarea placeholder="Введите описание ивента"></Textarea>
        <Label>Время</Label>
        <DatePicker
          value={selectedDate}
          renderInput={(params) => <TextField {...params} />}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
          // disableOpenPicker={true}
        />
        {/* тзь ыефк */}
      </Form>
    </NewEventFormDiv>
  );
};

export default NewEventForm;
