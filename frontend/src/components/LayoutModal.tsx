import React, { useEffect, useRef, MouseEvent } from "react";
import { closeModal } from "../store/modalSlice";
import { useAppDispatch } from "../hooks/reduxHook";
import { LayoutModalProps } from "../interfaces/LayoutModalInterfaces";
import closeIcon from "../icons/closeIcon.svg";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  display: block;

  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  min-height: 100%;
  box-sizing: border-box;
  transition: background-color 2s;
`;

const ModalFrame = styled.div`
  position: relative;
  background: #ffffff;
  margin: auto auto;
  border-radius: 10px;
  overflow: hidden;
  vertical-align: middle;
  top: 15%;
  min-height: 50%;
  box-shadow: 2px 5px 10px rgb(0 0 0 / 5%);
  max-width: 720px;
  z-index: 3;
`;

const ContentHead = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  margin: 5px;
`;
const ModalContent = styled.div``;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const LayoutModal = (props: LayoutModalProps) => {
  const frame = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const onModal = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(closeModal());
  };
  //   useEffect(() => {
  //     let top = 10;
  //     if (window.innerWidth > frame.current.clientHeight) {
  //       top = Math.max(
  //         top,
  //         (window.innerHeight - frame.current.clientHeight) / 2 - top
  //       );
  //     }
  //     frame.current.style.marginTop = `${top}px`;
  //     document.body.style.overflow = "hidden";
  //     return () => {
  //       document.body.style.overflow = "auto";
  //     };
  //   });

  return (
    <Modal onClick={(e) => onModal(e)}>
      <ModalFrame ref={frame} onClick={(e) => e.stopPropagation()}>
        <ContentHead>
          {/* {props.title} */}
          <Button onClick={() => dispatch(closeModal())}>
            <Img src={closeIcon} alt="close" />
          </Button>
        </ContentHead>
        <ModalContent>{props.children}</ModalContent>
      </ModalFrame>
    </Modal>
  );
};

export default LayoutModal;
