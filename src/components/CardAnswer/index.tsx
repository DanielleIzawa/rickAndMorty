import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import Image from "../../commom/assets/cartoon.svg";
import {
  Container,
  ContainerDescription,
  ContainerImage,
  ContainerModal,
  Content,
  List,
  Text,
} from "./style";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const CardAnswer: React.FC = (/* { onClick } */) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  interface CardResponse {
    results: {
      image: string;
      name: string;
      species: string;
      status: String;
    };
  }

  /* const [aboutCard, setAboutCard] = useState(""); */
  const [card, setCard] = useState<CardResponse[]>([]);
  const url = "https://rickandmortyapi.com/api/character";
  function getUser() {
    fetch(`${url}`)
      .then((response) => response.json())
      /* .then((data) => setCard(data.results)); */
      /* .catch((error) => console.error(error)); */
      .then((json) => console.log(json));
  }

  /* getUser(); */

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Container onClick={handleOpenModal} id="renderApiResult">
        {card?.map((person: CardResponse) => (
          <List>
            <img src={Image} alt="" className="Image" />
            <Content>
              <h1>
                <span>
                  <p id="userName">{/* {person.results.name} */}</p>
                </span>
              </h1>
              <ContainerDescription>
                <h3>
                  <span>
                    <span>
                      <p>Alive - Humanoid</p>
                      <p>{person.results.species}</p>
                    </span>
                  </span>
                </h3>
                <h3>
                  <span>
                    <span>
                      <p>
                        <p>Primeira aparição:</p>
                        {/* <p>{person.results.status}</p> */}
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
              </ContainerDescription>
            </Content>
          </List>
        ))}
      </Container>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <ContainerModal>
          <button onClick={handleCloseModal}>close</button>
          <CardAnswer />
          <ContainerImage>
            <h3>
              <span>Personagem relacionados</span>
            </h3>
            <img src={Image} alt="" className="Image" />
            <Text>
              <h3>
                <p>Rick Sanchez</p>
              </h3>
            </Text>
            <img src={Image} alt="" className="Image" />

            <Text>
              <h3>
                <p>Rick Sanchez</p>
              </h3>
            </Text>
          </ContainerImage>
        </ContainerModal>
      </Modal>
    </>
  );
};
export default CardAnswer;
