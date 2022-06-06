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
  a {
    margin-left: 140px;
  }
  .logo {
    padding: 200px 0 0 0;
  }
  @media (max-width: ${Theme.breakpoints.large}) {
    img {
      width: 80%;
    }
  }

  @media (max-width: ${Theme.breakpoints.medium}) {
    img {
      width: 70%;
      margin-top: 10px;
    }
    nav {
      height: 70px;
    }
  }
  @media (max-width: ${Theme.breakpoints.small}) {
    img {
      width: 50%;
      margin-top: 10px;
    }
    nav {
      height: 70px;
    }
  }
`;
