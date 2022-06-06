import styled from "styled-components";

import image from "../../commom/assets/set.png";
import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  justify-content: center;
  max-width: 940px;
  /*   font-weight: ${Theme.fontweight.large_weight};
  font-size: ${Theme.fontSize.px_large};
  color: ${Theme.colors.blue_text}; */
`;
export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 960px;
  margin: 25px auto;
  padding-left: 21%;
`;
export const MasterSelect = styled.div`
  padding-left: 200px;
  padding-top: 55px;
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
