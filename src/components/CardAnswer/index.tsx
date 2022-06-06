import React /* , { useState } */ from "react";
/* Modal.setAppElement("modal"); */
import Modal from "react-modal";

/* import Ball from "../../commom/assets/ball.svg"; */
import Image from "../../commom/assets/cartoon.svg";
import { Container, ContainerImg, Content, List } from "./style";

const CardAnswer: React.FC = () => {
  /* const [modalIsOpen, setIsOpen] = useState(false); */

  /*  function openModal() {
    setIsOpen(true);
  } */

  return (
    <>
      {/* <button onClick={openModal}>Carousel</button> */}
      <Container>
        <List>
          <Content>
            <h1>
              <span>
                <p>Heroine Keith</p>
              </span>
            </h1>
            <h3>
              <span>
                <span>
                  <p>Alive - Humanoid</p>
                </span>
              </span>
            </h3>
            <h3>
              <span>
                <span>
                  <p>
                    <p>Primeira aparição:</p>
                  </p>
                </span>
              </span>
            </h3>
            <h3>
              <span>
                <span>
                  <p>Pilot Episode</p>
                </span>
              </span>
            </h3>
            <h3>
              <span>
                <span>
                  <p>
                    <p>Ultima aparição:</p>
                  </p>
                </span>
              </span>
            </h3>
            <h3>
              <span>
                <span>
                  <p>The Vat of Acid Episode</p>
                </span>
              </span>
            </h3>
            <ContainerImg>
              <img src={Image} alt="" className="Image" />
            </ContainerImg>
            {/* <ContainerImgBall>
                <img src={Ball} alt="" className="Image" />
              </ContainerImgBall> */}
          </Content>
        </List>
      </Container>
      {/* <Modal isOpen={modalIsOpen}>
        <h2>Hello</h2>
      </Modal> */}
    </>
  );
};
export default CardAnswer;
