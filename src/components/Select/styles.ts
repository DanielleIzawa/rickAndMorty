import styled from "styled-components";

import image from "../../commom/assets/set.png";
import Theme from "../../commom/styles/theme";

export const MasterSelect = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const SelectBasic = styled.select`
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

export const Form = styled.form`
  width: 495px;
  height: 55px;
  color: ${Theme.colors.blue_text};
  border-color: ${Theme.colors.blue_text};
  border-top: 4px;
  border-radius: 4px;

  input,
  legend,
  fieldset {
    border-color: ${Theme.colors.blue_text};
  }
  input {
    width: 450px;
    border: none;
  }
`;
