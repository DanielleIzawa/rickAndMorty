import styled from "styled-components";

import image from "../../commom/assets/set.png";
import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
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
    margin-left: 20px;
    width: 450px;
    border: none;
    height: 40px;
    color: ${Theme.colors.blue_text};
    font-weight: ${Theme.fontweight.small_weight};
    font-size: ${Theme.fontSize.px_medium_title};
  }

  legend {
    margin-left: calc(11.5% - 35px - 8px);
    padding: 0 5px 0 5px;
  }
`;
export const MasterSelect = styled.div`
  height: 40px;
`;
export const MasterSelectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  gap: 25px;
  fieldset {
    legend {
      margin-left: 10px;
      padding: 0 5px 0 5px;
    }
  }
  @media (max-width: ${Theme.breakpoints.large}) {
    select {
      font-size: 20px;
    }
  }
  @media (max-width: ${Theme.breakpoints.medium}) {
    select {
      font-size: 18px;
    }
  }
`;
export const SelectBasic = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(${image}) no-repeat center right;
  border: none;
  width: 200px;
  text-align: center;
  justify-content: center;
  font-weight: ${Theme.fontweight.small_weight};
  font-size: ${Theme.fontSize.px_medium_title};
  border-color: ${Theme.colors.blue_text};
  color: ${Theme.colors.blue_text};
  padding-top: 2px;
`;
