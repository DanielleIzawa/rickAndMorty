import styled from "styled-components";

import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-width: 960px;
  margin: 25px auto;
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
`;
