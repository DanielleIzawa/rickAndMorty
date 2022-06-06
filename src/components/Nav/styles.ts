import styled from "styled-components";

import Theme from "../../commom/styles/theme";

export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 90px;
  background-color: ${Theme.colors.black};
  .logo {
    padding: 200px 0;
  }
  h3:hover {
    background: ${Theme.colors.black_card};
    padding: 12px;
    border-radius: 4px;
  }
`;
