import styled from "styled-components";

import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  display: flex;

  /* align-items: flex-start; */
`;
export const List = styled.div`
  /* margin-left: 201px; */
  /* display: flex; */
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 470px;
  height: 154px;
  /* left: 250px; */
  border-bottom: 5px solid ${Theme.colors.gray_dark};
  border-color: #d4d7d9;
  border-bottom-left-radius: 5px;

  background: ${Theme.colors.black_card};
  background-color: ${Theme.colors.grey};
  color: ${Theme.colors.blue_text};
`;
export const ContainerImg = styled.div`
  text-align: end;
  margin-top: -72px;
`;
export const Img = styled.div`
  width: 176px;
  height: 148px;
`;
