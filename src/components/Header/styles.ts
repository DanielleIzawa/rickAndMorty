import styled from "styled-components";

import Theme from "../../commom/styles/theme";

export const Container = styled.nav`
  height: 90px;
  background-color: ${Theme.colors.black};

  position: sticky;
  top: 0;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-size: cover, cover;
  backdrop-filter: blur(30px);
  padding: 1rem;
  a {
    text-decoration: none;
  }
  h3:hover {
    background: ${Theme.colors.black_card};
    padding: 12px;
    border-radius: 4px;
  }
`;
export const ContainerImg = styled.div`
  padding: 10%;
  margin-top: 1%;
`;
export const Hamburguer = styled.button`
  font-size: 30px;
`;
export const MasterList = styled.ul`
  padding-right: 80px;
  list-style-type: none;
  nav,
  ul,
  li {
    transition: background-color 0.3s;
    float: left;
    padding: 20px;
  }
`;
export const List = styled.li`
  color: ${Theme.colors.white_text};
`;
