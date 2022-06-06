import React, { useState } from "react";
import Modal from "react-modal";

/* import Image from "../../commom/assets/ImgMain.png"; */
import CardAnswer from "../../components/CardAnswer";
import Footer from "../../components/Footer";
import { Ball, BallMaster, Container, ContainerCarousel } from "./styles";

const Teste: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button onClick={openModal}>Teste</button>
      <ContainerCarousel>
        <h3>
          <span>
            <span>Resultados</span>
          </span>
        </h3>
        <div className="items-wrapper">
          <div className="items">
            <div className="item">
              {/* <img src={Image} alt="" className="Image" /> */}
              <Container>
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
              </Container>
            </div>
            <div className="item">
              <Container>
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
              </Container>
            </div>
            <div className="item">
              <Container>
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
                <CardAnswer />
              </Container>
              <Modal isOpen={modalIsOpen}>
                <h2>Hello</h2>
              </Modal>
            </div>
          </div>
        </div>
        <BallMaster>
          <Ball></Ball>
          <Ball></Ball>
          <Ball></Ball>
        </BallMaster>
      </ContainerCarousel>
      <Footer />
    </>
  );
};
export default Teste;
