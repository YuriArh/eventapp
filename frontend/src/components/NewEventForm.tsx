import { useState } from "react";
import styled from "styled-components";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
// import Calendar from "react-calendar";
import moment from "moment";
import { TextField, Box } from "@mui/material";
import { motion } from "framer-motion";

import { useAppDispatch } from "../hooks/reduxHook";
import { openLocationInfo } from "../redux/features/modalSlice";
import { addEventInfo } from "../redux/features/newEventSlice";
import Event from "../interfaces/EventSliceInterface";

// import "react-calendar/dist/Calendar.css";

const NewEventFormDiv = styled.div`
  position: relative;
`;

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
const InputBlock = styled.div`
  background-color: rgba(230, 230, 230, 0.3);
  display: flex;
  align-items: center;
  width: 220px;
  border-radius: 20px;
  height: 50px;
  margin-bottom: 10px;
  margin-right: 10px;
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

const PickerBlock = styled.div`
  display: flex;
`;

const PickerInput = styled.input`
  border: none;
  border-radius: 20px;
  background-color: transparent;
  padding: 10px;
  outline: none;
`;

const Button = styled(motion.input)`
  background-color: black;
  border-radius: 20px;
  width: 40%;
  padding: 10px;
  color: white;
  margin: 30px auto 20px auto;

  &:hover {
    cursor: pointer;
  }
`;

const TextFieldStyled = styled(TextField)``;
// const WrapperDatePicker = styled(DatePicker)`
//   display: none;
// `;

const NewEventForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<Date | null>(new Date());
  const [eventData, setEventData] = useState<Event>();
  const [name, setName] = useState<Event["name"]>("");
  const [desc, setDesc] = useState<Event["desc"]>("");

  const dispatch = useAppDispatch();
  let date = moment(selectedDate).format("DD/MM/YYYY");
  let time = moment(selectedTime).format("LT");

  return (
    <NewEventFormDiv>
      <Form>
        <Label>Title</Label>
        <Input
          placeholder="?????????????? ???????????????? ????????????"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label>????????????????</Label>
        <Textarea
          placeholder="?????????????? ???????????????? ????????????"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></Textarea>
        <Label>??????????</Label>
        <PickerBlock>
          <DatePicker
            value={selectedDate}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <InputBlock>
                <PickerInput ref={inputRef} {...inputProps} />
                {InputProps?.endAdornment}
              </InputBlock>
            )}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
            // disableOpenPicker={true}
          />
          {/* <Calendar value={selectedDate} onChange={setSelectedDate} /> */}
          <TimePicker
            value={selectedTime}
            onChange={(newValue) => {
              setSelectedTime(newValue);
            }}
            ampm={false}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <InputBlock>
                <PickerInput ref={inputRef} {...inputProps} />
                {InputProps?.endAdornment}
              </InputBlock>
            )}
          />
        </PickerBlock>

        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addEventInfo({ name, desc, date, time }));
            dispatch(openLocationInfo());
          }}
          whileHover={{ scale: [1, 1.2] }}
          type={"submit"}
          value={"???????????????? ???????????????????????????? ????????????"}
        ></Button>
      </Form>
    </NewEventFormDiv>
  );
};

export default NewEventForm;
