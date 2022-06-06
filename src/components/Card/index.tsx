import React from "react";

import Image from "../../commom/assets/cartoon.svg";
import { Container, ContainerImg, Content, List } from "./style";

const Card: React.FC = () => {
  return (
    <>
      <Container>
        <List>
          <Content>
            <h2>Other Dimensions</h2>
            <h3>Dimensão: c-1376</h3>
            <ContainerImg>
              <img src={Image} alt="" className="Image" />
            </ContainerImg>
          </Content>
        </List>
      </Container>
    </>
  );
};
export default Card;
