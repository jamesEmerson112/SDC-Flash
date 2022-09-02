import styled from "styled-components";

const buttonS = `
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  padding: 5px 5px;
  background-color: white;
  `;

const Button = styled.button`
  ${buttonS}
`;

const InputButton = styled.input`
  ${buttonS}
`;

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
`;

const Modal = styled.div`
  color: white;
  text-shadow: 1px 0 black, 0 1px black, -1px 0 black, 0 -1px black;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%;
  max-width: 50%;
`;

const ModalForm = styled.form`
  background-color: rgba(128, 128, 128);
  border-radius: 5px;
`;

const ModalImg = styled.img`
  border-radius: 5px;
  max-width: 100%;
  max-width: 100%;
`;

const ModalClose = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  background-color: transparent;
  color: white;
  text-shadow: 1px 0 black, 0 1px black, -1px 0 black, 0 -1px black;
  position: fixed;
  top: 0;
  right: 0;
`;

export {
  Button,
  InputButton,
  ModalClose,
  Modal,
  ModalImg,
  ModalOverlay,
  ModalForm,
};
