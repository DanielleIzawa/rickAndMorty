import React from "react";

/* import Image from "../../commom/assets/imgMain.svg"; */
import Image from "../../commom/assets/rick-and-morty-plant-food-vegetation-outer-space-transparent-png-1178468 1.png";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Nav from "../../components/Nav";
import { Container, ImageMidle } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Container>
        <h1 className="text">
          Está preparado para navegar no mundo <br />
          de Rick and Morty ?
        </h1>
        <ImageMidle>
          <img src={Image} alt="" className="Image" />
        </ImageMidle>
        <Button />
        <Link />
      </Container>
    </>
  );
};
export default Home;
