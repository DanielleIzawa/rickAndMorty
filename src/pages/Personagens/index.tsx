import React from "react";

import Image from "../../commom/assets/Rick-and-Morty-Shop-logo1 1.svg";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import FormSearch from "../../components/FormSearch";
import Nav from "../../components/Nav";
import { ContainerText } from "./styles";

const Personagens: React.FC = () => {
  return (
    <>
      <Nav />
      <ContainerText>
        <h1>Buscar Personagens</h1>
      </ContainerText>
      <FormSearch />
      {/* <ImageMidle>
        <img src={Image} alt="" className="Image" />
      </ImageMidle>
      <Link /> */}
      <Carousel />
      <Footer />
    </>
  );
};
export default Personagens;
