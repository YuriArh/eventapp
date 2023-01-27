import styled from "styled-components";
import { openModal, closeModal } from "../store/modalSlice";
import plusIcon2 from "../icons/plusIcon2.svg";
import { useAppDispatch } from "../hooks/reduxHook";

const StyledButton = styled.button`
  border-radius: 50%;
  width: 75px;
  height: 75px;

  background: linear-gradient(to right, #fd746c, #ff9068);
  font-size: 24px;
  position: fixed;
  z-index: 1;
  right: 48%;
  bottom: 30px;
  color: white;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 35px;
  color: white;
`;

const Button = () => {
  const dispatch = useAppDispatch();
  return (
    <StyledButton onClick={() => dispatch(openModal())}>
      <Img src={plusIcon2} alt="plus icon" />
    </StyledButton>
  );
};

export default Button;
