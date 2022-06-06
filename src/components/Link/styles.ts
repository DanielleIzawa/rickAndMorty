import styled from "styled-components";

import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  margin-top: 20px;
`;
export const Text = styled.h4`
  font-size: ${Theme.fontSize.px_small};
  font-weight: ${Theme.fontweight.medium_weight};
  color: ${Theme.colors.black};
  text-align: center;
`;
