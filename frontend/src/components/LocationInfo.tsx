import styled from "styled-components";
import { motion } from "framer-motion";

import { closeLocationInfo } from "../store/modalSlice";
import { useAppDispatch } from "../hooks/reduxHook";

import okIcon from "../icons/ok_icon.svg";

const Div = styled(motion.div)`
  position: absolute;
  width: 30%;
  bottom: 0;
  background-color: white;
  left: 35%;
  height: 50px;
  z-index: 3;
  border-radius: 25px 25px 0 0;
`;
const Content = styled.div`
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
`;
const Input = styled.input`
  border: none;
  border-radius: 20px;
  background-color: rgba(230, 230, 230, 0.5);
  padding: 10px;
  width: 80%;
  outline: none;
`;

const Button = styled(motion.button)`
  background: linear-gradient(to right, #fd746c, #ff9068);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px white;

  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
  color: white;
`;

const LocationInfo = () => {
  const dispatch = useAppDispatch();
  return (
    <Div
      initial={{ y: "50px" }}
      animate={{ y: 0 }}
      exit={{ y: "50px" }}
      transition={{ ease: "easeInOut" }}
    >
      <Content>
        <Input type="text" value={"выберите локацию"} readOnly />
        <Button
          onClick={() => dispatch(closeLocationInfo())}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <Img src={okIcon} />
        </Button>
      </Content>
    </Div>
  );
};

export default LocationInfo;
