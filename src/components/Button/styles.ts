import styled from "styled-components";

import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  border: none;
  border-radius: 1.25rem;
  width: 19.2rem;
  height: 4.1rem;
`;
export const ButtonStart = styled.button`
  font-weight: ${Theme.fontweight.small_weight};
  font-size: ${Theme.fontSize.px_large};
  color: ${Theme.colors.white_text};
  background-color: ${Theme.colors.blue_text};
  border: none;
  border-radius: 1.25rem;
  width: 19.2rem;
  height: 4.1rem;
  text-align: center;
`;
