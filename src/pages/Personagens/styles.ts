import styled from "styled-components";

import Theme from "./../../commom/styles/theme";

export const ContainerText = styled.div`
  margin-top: 60px;
  @media (max-width: ${Theme.breakpoints.large}) {
    h1 {
      font-size: 23px;
    }
  }
  @media (max-width: ${Theme.breakpoints.medium}) {
    h1 {
      font-size: 20px;
    }
  }
`;
export const ImageMidle = styled.div`
  margin-top: 150px;
  text-align: center;
  img {
    width: 359px;
    height: 184.5px;
  }
  @media (max-width: ${Theme.breakpoints.large}) {
    img {
      width: 70%;
    }
  }
  @media (max-width: ${Theme.breakpoints.medium}) {
    img {
      width: 50%;
    }
  }
`;
