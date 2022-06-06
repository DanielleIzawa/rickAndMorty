import styled from "styled-components";

import image from "../../commom/assets/set.png";
import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  justify-content: center;
  max-width: 940px;
  h1 {
    text-align: start;
  }
  @media (max-width: ${Theme.breakpoints.large}) {
    div {
      width: 90%;
    }
    h1 {
      font-size: ${Theme.fontSize.px_medium_title};
    }
  }
  @media (max-width: ${Theme.breakpoints.medium}) {
    div {
      width: 90%;
      /* justify-items: center; */
    }
    h1 {
      font-size: ${Theme.fontSize.px_medium};
    }
  }
  @media (max-width: ${Theme.breakpoints.small}) {
    div {
      width: 90%;
      padding-left: 0;
    }
  }
`;
export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 960px;
  margin: 25px auto;
  padding-left: 18%;
  .text {
    margin-top: 40px;
  }

  @media (max-width: ${Theme.breakpoints.small}) {
    div {
      width: 95%;
      padding-left: 0;
    }
  }
`;
export const MasterSelect = styled.div`
  padding-left: 200px;
  padding-top: 49px;
`;
export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(${image}) no-repeat center right 21px;
  border: 1px solid #333;
  padding-right: 20px;
  width: 210px;
  height: 60px;
  left: 250px;
  text-align: center;
  border: 1px solid #ebebeb;
  border-radius: 6px;
  background-color: ${Theme.colors.grey};
  justify-content: center;
  font-weight: ${Theme.fontweight.small_weight};
  font-size: ${Theme.fontSize.px_medium_title};
  color: ${Theme.colors.blue_text};
`;
