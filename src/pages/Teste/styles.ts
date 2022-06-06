import styled from "styled-components";

/* import Theme from "../../commom/styles/theme"; */

/* export const Text = styled.div`
  display: flex;
  text-align: start;
`; */
export const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 43vh;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-rows: 1fr 1fr 1fr; */
  grid-gap: 20px;
  max-width: 960px;
  /*   margin: 25px auto; */
  padding-left: 7%;
`;

export const ContainerCarousel = styled.div`
  /* place-items: center; */
  height: 100vh;
  background-color: #24282f;

  .items-wrapper {
    width: 100vw;
  }
  .items {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    /* overflow: hidden; */
  }
  .item {
    flex: none;
    width: 100%;
    height: 600px;

    scroll-snap-align: start;
    pointer-events: none;
  }
  img {
    /* width: 30%;
    height: 100%; */

    /* object-fit: cover; */
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BallMaster = styled.div`
  width: 100vw;
  height: 43vh;
  justify-content: center;
  padding-top: 15px;
  display: grid;
  grid-template-columns: 10px 10px 10px;
  background-color: #24282f;
  grid-gap: 15px;
`;
export const Ball = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #323741;
  :hover {
    background-color: #4a5260;
  }
`;

/* document.querySelector("#items")
  .addEventListener("Wheel", event => {
    if (event.deltaY > 0) {
      event.target.scrollBy(300, 0)
    } else {
      event.target.scrollBy(-300, 0)
    }
  }) */
