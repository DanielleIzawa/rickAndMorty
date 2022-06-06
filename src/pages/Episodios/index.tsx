import React from "react";

import Card from "../../components/Card";
import Nav from "../../components/Nav";
import LinkShow from "../../components/LinkShow";
import Select from "../../components/Select";
import { Container, ContainerCard } from "./styles";

const Episodios: React.FC = () => {
  return (
    <>
      <Nav />
      <Container>
        <h1>
          <span>Episódios</span>
        </h1>
        <Select />
        <ContainerCard>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ContainerCard>
        <LinkShow />
      </Container>
    </>
  );
};
export default Episodios;
