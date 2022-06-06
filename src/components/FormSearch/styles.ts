import styled from "styled-components";

import image from "../../commom/assets/set.png";
import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
export const Form = styled.form`
  width: 495px;
  color: ${Theme.colors.blue_text};
  border-color: ${Theme.colors.blue_text};

  input,
  legend,
  fieldset {
    border-color: ${Theme.colors.blue_text};
    border-radius: 4px;
  }
  input {
    width: 477px;
    border: none;
    height: 40px;
    color: ${Theme.colors.blue_text};
    font-weight: ${Theme.fontweight.small_weight};
    font-size: ${Theme.fontSize.px_medium_title};
  }
  fieldset {
    width: 234px;
  }
`;
export const MasterSelect = styled.div`
  gap: 10px;
  height: 40px;
`;
export const MasterSelectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
`;
export const SelectBasic = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(${image}) no-repeat center right 21px;
  padding-right: 20px;
  border: none;
  width: 230px;
  left: 250px;
  text-align: center;
  justify-content: center;
  font-weight: ${Theme.fontweight.small_weight};
  font-size: ${Theme.fontSize.px_medium_title};
  border-color: ${Theme.colors.blue_text};
  color: ${Theme.colors.blue_text};
`;
