import React from "react";
import { Carousel } from "react-responsive-carousel";

import CardAnswer from "../CardAnswer";
import { CarouselLine, Container, ContainerCarousel } from "./styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselMain: React.FC = () => {
  return (
    <>
      <Container style={{ padding: "10px" }}>
        <h3 className="text">
          <span>
            <span>Resultados</span>
          </span>
        </h3>
        <Carousel className="item" showArrows={false}>
          <ContainerCarousel className="containerCarousel">
            <CarouselLine>
              <CardAnswer />
              <CardAnswer />
              <CardAnswer />
            </CarouselLine>
            <CarouselLine>
              <CardAnswer />
              <CardAnswer />
              <CardAnswer />
            </CarouselLine>
          </ContainerCarousel>
          <ContainerCarousel>
            <CarouselLine>
              <CardAnswer />
              <CardAnswer />
              <CardAnswer />
            </CarouselLine>
            <CarouselLine>
              <CardAnswer />
              <CardAnswer />
              <CardAnswer />
            </CarouselLine>
          </ContainerCarousel>
          <div>
            <CarouselLine>
              <CardAnswer />
              <CardAnswer />
              <CardAnswer />
            </CarouselLine>
            <CarouselLine>
              <CardAnswer />
              <CardAnswer />
              <CardAnswer />
            </CarouselLine>
          </div>
        </Carousel>
        {/* <Modal isOpen={modalIsOpen}>
          <h2>Hello</h2>
        </Modal> */}
      </Container>

      {/* <Footer /> */}
    </>
  );
};
export default CarouselMain;
