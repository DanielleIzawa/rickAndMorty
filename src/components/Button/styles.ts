import styled from "styled-components";

import Theme from "../../commom/styles/theme";

export const Container = styled.div`
  border: none;
  border-radius: 1.25rem;
  width: 19.2rem;
  height: 4.1rem;
  margin-top: 50px;
  @media (max-width: ${Theme.breakpoints.large}) {
    button {
      width: 70%;
      font-size: 95%;
    }
  }
  @media (max-width: ${Theme.breakpoints.medium}) {
    button {
      width: 50%;
      font-size: 90%;
    }
  }
`;
export const ButtonStart = styled.button`
  font-weight: ${Theme.fontweight.small_weight};
  font-size: ${Theme.fontSize.px_medium};
  color: ${Theme.colors.white_text};
  background-color: ${Theme.colors.blue_text};
  border: none;
  border-radius: 1rem;
  width: 17rem;
  height: 3.2rem;
  text-align: center;
`;
