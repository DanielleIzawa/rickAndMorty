import React from "react";

import Card from "../../components/Card";
import LinkShow from "../../components/LinkShow";
import Nav from "../../components/Nav";
import { Container, ContainerMaster } from "./styles";

const LugaresFamosos: React.FC = () => {
  return (
    <>
      <Nav />
      <ContainerMaster>
        <Container>
          <h1>Lugares Famosos de Rick &amp; Morty</h1>
          <div></div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
      </ContainerMaster>
      {/* <CardAnswer /> */}
      <LinkShow />
    </>
  );
};
export default LugaresFamosos;
