import React from "react";

import Card from "../../components/Card";
import LinkShow from "../../components/LinkShow";
import Nav from "../../components/Nav";
import Select from "../../components/Select";
import { Container, ContainerCard } from "./styles";

const Episodios: React.FC = () => {
  return (
    <>
      <Nav />
      <Container>
        <ContainerCard>
          <h1 className="text">Episódios</h1>
          <Select />
          <Card />
          <Card fullSize />
          <Card fullSize />
          <Card fullSize />
          <Card fullSize />
          <Card fullSize />
        </ContainerCard>
        <LinkShow />
      </Container>
    </>
  );
};
export default Episodios;
