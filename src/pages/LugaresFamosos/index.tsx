import React /* , { useState } */ from "react";

import Card from "../../components/Card";
import LinkShow from "../../components/LinkShow";
import Nav from "../../components/Nav";
import { Container, ContainerMaster } from "./styles";

const LugaresFamosos: React.FC = () => {
  /* fetch("https://rickandmortyapi.com/api/character", {
    method: "GET",
  })
    .then((response) => response.json())
    .then(function (json) {
      var container = document.querySelector(".container");
      json.results.map(function (results) {
        console.log(json);
        container.innerHTML +=
          `<div> <img src=` +
          results.image +
          `> </div><br>
          <strong> ` +
          results.name +
          `</strong><br>
          <span> ` +
          results.species +
          `</span><br>
          <i> ` +
          results.status +
          `</i><br>
          <hr>
          `;
      });
    }); */
  /* const [cardLugaresFamosos, setcardLugaresFamosos] = useState("");
  fetch("https://rickandmortyapi.com/api/character", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then((data) => setcardLugaresFamosos(data.results)); */

  /*  fetch("https://rickandmortyapi.com/api/location", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  fetch("https://rickandmortyapi.com/api/episode", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
 */
  return (
    <>
      <div className="container"></div>
      <Nav />
      <ContainerMaster>
        <Container>
          <h1>Lugares Famosos de Rick &amp; Morty</h1>
          <div></div>
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          <Card />
        </Container>
      </ContainerMaster>
      {/* <CardAnswer /> */}
      <LinkShow />
    </>
  );
};
export default LugaresFamosos;
