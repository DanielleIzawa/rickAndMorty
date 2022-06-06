import React from "react";

import Image from "../../commom/assets/imgMain.svg";
import { ContainerCarousel } from "../../pages/Teste/styles";
/* import Image from "../../commom/assets/Rick-and-Morty-Shop-logo1 1.svg"; */
/* import Card from "../Card"; */
import Footer from "../Footer";
import {} from "./styles";

import "swiper/css";
import "swiper/css/pagination";

const Carousel: React.FC = () => {
  return (
    <>
      <ContainerCarousel>
        <h1>Resultados</h1>
        <div className="items-wrapper">
          <div className="items">
            <div className="item">
              <img src={Image} alt="" className="Image" />
            </div>
            <div className="item">
              <img src={Image} alt="" className="Image" />
            </div>
            <div className="item">
              <img src={Image} alt="" className="Image" />
            </div>
            <div className="item">
              <img src={Image} alt="" className="Image" />
            </div>
          </div>
        </div>
      </ContainerCarousel>
      <Footer />
    </>
  );
};
export default Carousel;
