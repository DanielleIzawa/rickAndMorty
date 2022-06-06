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
  .mobileMenu {
    display: none;
  }

  .barra {
    background-color: #333333;
    height: 100%;
    width: 300px;
    position: fixed;
    right: -300px;
    top: 0;
    transition: all 0.2s linear;
  }

  .barra .link {
    list-style: none;
    background-color: #333333;
    left: 419px;
  }
  .barra nav a:hover {
    background-color: #c4c4c4;
    color: #333333;
  }
  /* .link:hover {
  background-color: #c4c4c4;
  color: #333333;
} */

  .barra nav {
    width: -100%;
    position: fixed;
    top: 60px;
    text-align: end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .barra nav a {
    width: 100%;
    text-decoration: none;
    /* margin-right: 22px; */
    text-indent: 180px;
  }

  .link {
    color: #ffffff;
    font-family: "Lato";
    font-size: 16px;
    padding: 10px;
    border-bottom: 2px solid #222;
    transition: all 0.2s linear;
    opacity: 0;
    margin-top: 200px;
    margin-right: 22px;
    text-indent: 80px;
  }

  /* #check:checked ~ .barra {
  transform: translateX(-300px);
}
 */
  #check:checked ~ .barra {
    right: 0;
  }

  #check:checked ~ .barra nav a .link {
    opacity: 1;
    margin-top: 0;
    transition-delay: 0.2s;
    display: flex;
  }

  label1 {
    cursor: pointer;
    position: absolute;
    height: 22px;
    width: 25px;
    right: 21px;
    top: 10px;
    z-index: 1;
  }

  label1 span {
    position: absolute;
    display: block;
    height: 5px;
    width: 100%;
    border-radius: 30px;
    background-color: #333333;
    transition: 0.25s ease-in-out;
  }

  label1 span:nth-child(1) {
    top: 15px;
  }
  label1 span:nth-child(2) {
    top: 25px;
  }
  label1 span:nth-child(3) {
    top: 35px;
  }

  #check:checked + label1 span:nth-child(1) {
    transform: translateX(-220px) rotate(-45deg);
    top: 20px;
  }
  #check:checked + label1 span:nth-child(2) {
    opacity: 0;
  }
  #check:checked + label1 span:nth-child(3) {
    transform: translateX(-220px) rotate(45deg);
    top: 20px;
  }

  #check:checked + label1 span {
    background-color: #ffffff !important;
  }

  .mobileMenu {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .mobileMenu {
      display: block;
    }
  }

  @media screen and (max-width: 411px) {
    .mobileMenu {
      display: block;
    }

    body {
      height: 731px;
    }

    .barra {
      width: 350px;
      right: -350px;
    }
    .barra nav a {
      text-indent: 220px;
    }
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
