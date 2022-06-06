import styled from "styled-components";

import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  text-align: center;
  margin-bottom: 30px;
  img {
    margin-left: 20px;
  }
`;

export const Text = styled.h2`
  cursor: pointer;
  margin-top: 80px;
  text-align: center;
  font-weight: ${Theme.fontweight.medium_weight};
  font-size: ${Theme.fontSize.px_medium_text};
`;
