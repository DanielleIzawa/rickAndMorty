import React /* , { useState } */ from "react";

/* import Image from "../../commom/assets/cartoon.svg"; */
import { Container, ContainerDescription, Content, List } from "./style";

interface CardProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const CardAnswer: React.FC<CardProps> = ({ onClick }) => {
  return (
    <>
      <Container onClick={onClick}>
        <List>
          {/* <img src={Image} alt="" className="Image" /> */}
          <Content>
            <h1>
              <span>
                <p>Heroine Keith</p>
              </span>
            </h1>
            <ContainerDescription>
              <h3>
                <span>
                  <span>
                    <p>Alive - Humanoid</p>
                  </span>
                </span>
              </h3>
              <h3>
                <span>
                  <span>
                    <p>
                      <p>Primeira aparição:</p>
                    </p>
                  </span>
                </span>
              </h3>
              <h3>
                <span>
                  <span>
                    <p>Pilot Episode</p>
                  </span>
                </span>
              </h3>
              <h3>
                <span>
                  <span>
                    <p>
                      <p>Ultima aparição:</p>
                    </p>
                  </span>
                </span>
              </h3>
              <h3>
                <span>
                  <span>
                    <p>The Vat of Acid Episode</p>
                  </span>
                </span>
              </h3>
            </ContainerDescription>
          </Content>
        </List>
      </Container>
    </>
  );
};
export default CardAnswer;
