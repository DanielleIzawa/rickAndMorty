import styled from "styled-components";

import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  display: flex;
`;
export const List = styled.div`
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 470px;
  height: 154px;
  border-radius: 10px;
  background: ${Theme.colors.black_card};
  color: ${Theme.colors.blue_text};
`;
export const ContainerImg = styled.div`
  display: flex;
  text-align: start;
  margin-top: -120px;
  height: 154px;

  img {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }
`;
export const Img = styled.div`
  img {
  }
`;
/* export const ContainerImgBall = styled.div`
  padding-left: 35%;
  img {
    width: 12px;
  }
`; */
