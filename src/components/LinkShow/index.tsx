import React from "react";

import Image from "../../commom/assets/set2.svg";
import { Container, Text } from "./styles";

const Link: React.FC = () => {
  return (
    <>
      <Container>
        <Text>Mostrar Mais</Text>
        <img src={Image} alt="" className="Image" />
      </Container>
    </>
  );
};
export default Link;
