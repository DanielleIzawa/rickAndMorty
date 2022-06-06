import React from "react";

import Card from "../../components/Card";
import Nav from "../../components/Nav";
import LinkShow from "../../components/LinkShow";
import { Container } from "./styles";

const LugaresFamosos: React.FC = () => {
  return (
    <>
      <Nav />
      <h1>
        <span>Lugares Famosos de Rick &amp; Morty</span>
      </h1>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
      <LinkShow />
    </>
  );
};
export default LugaresFamosos;
