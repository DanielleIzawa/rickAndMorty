import styled from "styled-components";

import Theme from "../../commom/styles/theme";

export const ContainerMaster = styled.div`
  h1 {
    text-align: start;
    margin-top: -5px;
  }
  @media (max-width: ${Theme.breakpoints.large}) {
    div {
      grid-template-columns: 1fr;
      justify-items: center;
      height: 90%;
    }
    h1 {
      font-size: ${Theme.fontSize.px_medium_title};
    }
  }
  @media (max-width: ${Theme.breakpoints.medium}) {
    div {
      grid-template-columns: 1fr;
      height: 80%;
      width: 85%;
      justify-items: center;
    }
    h1 {
      font-size: ${Theme.fontSize.px_medium};
    }
    h2,
    h3 {
      font-size: 99%;
    }
  }
  @media (max-width: ${Theme.breakpoints.small}) {
    div {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 960px;
  margin: 25px auto;
  margin-top: 70px;
`;
export const TextContainer = styled.h2`
  justify-content: center;
  font-weight: ${Theme.fontweight.large_weight};
  font-size: ${Theme.fontSize.px_large};
  color: ${Theme.colors.blue_text};
`;
export const SubtitleContainer = styled.h3`
  justify-content: center;
  font-weight: ${Theme.fontweight.large_weight};
  font-size: ${Theme.fontSize.px_large};
  color: ${Theme.colors.blue_text};
`;
export const Img = styled.div`
  width: 176px;
  height: 150px;
  left: 527px;
  top: 281px;
  /*   @media (max-width: ${Theme.breakpoints.large}) {
    div,
    img {
      width: 70%;
    }
  }
  @media (max-width: ${Theme.breakpoints.medium}) {
    div,
    img {
      width: 50%;
    }
  } */
`;
