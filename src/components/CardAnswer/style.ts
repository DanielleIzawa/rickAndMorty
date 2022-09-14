import styled from "styled-components";

import Image from "../../commom/assets/cartoon.svg";
import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  display: flex;
  img {
    text-align: start;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }
`;
export const List = styled.div`
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 325px;
  height: 124px;
  border-radius: 10px;
  background: ${Theme.colors.black_card};
  color: ${Theme.colors.blue_text};

  /* img {
    height: 124px;
    margin-bottom: 100px;
    text-align: start;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  } */
  /*  h1 {
    span {
      p {
        margin-top: 1px;
      }
    }
  } */
  h3 {
    margin-top: -1px;
    margin-left: 0px;
  }
`;
export const ContainerImg = styled.div`
  display: flex;
  text-align: start;
  margin-top: -114px;
  margin-left: -190px;
  height: 156px;
  background: url(${Image}) no-repeat center right;
`;
export const ContainerDescription = styled.div`
  margin-top: 10px;
`;
export const Modal = styled.div`
  .ReactModal__Content {
  }
  .ReactModal__Content--after-open {
    width: 900px;
    height: 500px;
    background-color: red;
  }
`;
export const ContainerModal = styled.div``;
export const ContainerImage = styled.div``;
export const Img = styled.img``;
export const Text = styled.div``;
