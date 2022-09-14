import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import Image from "../../commom/assets/cartoon.svg";
import { Container, Content, List } from "./style";

interface FormSearchProps {
  fullSize?: boolean;
  /* onClick?: React.MouseEventHandler<HTMLElement>; */
}

const Card: React.FC<FormSearchProps> = ({ fullSize /* onClick */ }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Container fullSize={fullSize} onClick={handleOpenModal}>
        <List>
          {fullSize && <h1>01</h1>}
          <Content>
            <h2>Other Dimensions</h2>
            <h3>Dimensão: c-1376</h3>
          </Content>
        </List>
        <img src={Image} alt="" className="Image" />
      </Container>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <h2>Hello</h2>
        <button onClick={handleCloseModal}>close</button>
      </Modal>
    </>
  );
};
export default Card;
