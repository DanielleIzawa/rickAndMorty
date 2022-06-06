import React from "react";

/* import Logo from "../../commom/assets/logo.svg"; */
import Logo from "../../commom/assets/Rick-And-Morty-Logo 1.png";
import { Container, ContainerImg, List, MasterList } from "./styles";

const HeaderTest: React.FC = () => {
  /* const btnMobile = document.getElementById("btn-mobile");
  const btnMobileClose = document.getElementById("btn-mobile-close");
  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);

  btnMobileClose.addEventListener("click", toggleMenu);
  btnMobileClose.addEventListener("touchstart", toggleMenu); */

  return (
    <>
      <header id="header">
        <div className="headerMaster">
          <div className="left-wrapper">
            <ContainerImg>
              <a href="/">
                <img src={Logo} alt="" className="Image" />
              </a>
            </ContainerImg>
            <Container id="nav">
              <button
                id="btn-mobile"
                aria-label="Abrir Menu"
                aria-haspopup="true"
                aira-controls="menu"
                aria-expanded="false"
              >
                <span id="hamburguer"></span>
              </button>
              <MasterList id="menu" role="menu">
                <button
                  id="btn-mobile-close"
                  aria-label="Fechar Menu"
                  aria-haspopup="true"
                  aira-controls="menu"
                  aria-expanded="false"
                ></button>
                <List>
                  <a href="/Personagens">
                    <h3>
                      <span>Personagens</span>
                    </h3>
                  </a>
                </List>
                <List>
                  <a href="/LugaresFamosos">
                    <h3>
                      <span>Lugares Famosos</span>
                    </h3>
                  </a>
                </List>
                <List>
                  <a href="/Episodios">
                    <h3>
                      <span>Episódios</span>
                    </h3>
                  </a>
                </List>
              </MasterList>
            </Container>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeaderTest;
