import styled from "styled-components";

import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 60px;

  @media (max-width: ${Theme.breakpoints.large}) {
    h1 {
      font-size: 99%;
    }
  }
  @media (max-width: ${Theme.breakpoints.medium}) {
    h1 {
      font-size: 90%;
    }
  }
`;
export const ImageMidle = styled.div`
  margin-top: 52px;
  text-align: center;
  img {
    width: 500px;
    height: auto;
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
