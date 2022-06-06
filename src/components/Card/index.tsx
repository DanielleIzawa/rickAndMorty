import React from "react";

import Image from "../../commom/assets/cartoon.svg";
import { Container, Content, List } from "./style";

interface FormSearchProps {
  fullSize?: boolean;
  /* onClick?: React.MouseEventHandler<HTMLElement>; */
}
const Card: React.FC<FormSearchProps> = ({ fullSize /* , onClick */ }) => {
  return (
    <>
      <Container fullSize={fullSize} /* onClick={onClick} */>
        <List>
          {fullSize && <h1>01</h1>}
          <Content>
            <h2>Other Dimensions</h2>
            <h3>Dimensão: c-1376</h3>
          </Content>
        </List>
        <img src={Image} alt="" className="Image" />
      </Container>
    </>
  );
};
export default Card;
