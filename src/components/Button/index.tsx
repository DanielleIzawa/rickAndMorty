import React from "react";

import { ButtonStart, Container } from "./styles";

const Button: React.FC = () => {
  return (
    <>
      <Container>
        <a href="/Personagens">
          <ButtonStart>Iniciar Aventura</ButtonStart>
        </a>
      </Container>
    </>
  );
};
export default Button;
