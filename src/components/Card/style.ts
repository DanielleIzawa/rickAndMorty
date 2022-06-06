import styled from "styled-components";

import Theme from "../../commom/styles/theme";

interface ContainerProps {
  fullSize?: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  width: ${(props) => (props.fullSize ? "682px" : "490px")};
  height: 150px;
  border-bottom: 5px solid ${Theme.colors.gray_dark};
  border-color: #dee0e0;
  border-bottom-left-radius: 5px;
  background: ${Theme.colors.black_card};
  background-color: ${Theme.colors.grey};
  color: ${Theme.colors.blue_text};
  justify-content: space-between;
  h1 {
    margin-top: ${(props) => (props.fullSize ? "10px" : "0px")};
    margin-left: ${(props) => (props.fullSize ? "15px" : "0px")};
  }
  h2 {
    margin-top: ${(props) => (props.fullSize ? "-20px" : "0px")};
  }
`;
export const List = styled.div`
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  margin-top: 30px;
  h3 {
    text-align: start;
  }
`;
