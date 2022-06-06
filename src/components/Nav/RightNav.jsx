import React from "react";
import styled from "styled-components";
import Theme from "./../../commom/styles/theme";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${Theme.colors.black};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: white;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/Personagens">
          <h3>
            <span>Personagens</span>
          </h3>
        </a>
      </li>
      <li>
        <a href="/LugaresFamosos">
          <h3>
            <span>Lugares Famosos</span>
          </h3>
        </a>
      </li>
      <li>
        <a href="/Episodios">
          <h3>
            <span>Episódios</span>
          </h3>
        </a>
      </li>
    </Ul>
  );
};
export default RightNav;
