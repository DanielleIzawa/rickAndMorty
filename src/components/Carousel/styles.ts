import styled from "styled-components";

/* import Theme from "../../commom/styles/theme"; */
import Theme from "./../../commom/styles/theme";

export const Container = styled.div`
  background-color: #24282f;
  .text {
    margin-bottom: 30px;
  }
  .carousel-status {
    display: none;
  }
  ul {
    justify-content: flex-end;
  }
`;
export const CarouselLine = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 15px;
  background-color: #24282f;
  justify-content: center;
  flex-wrap: wrap-reverse;

  :last-child {
    /* margin-bottom: 50px; */
  }
`;

export const ContainerCarousel = styled.div`
  /* place-items: center; */
  height: 40vh;
  background-color: #24282f;
  /* width: 940px; */
  align-items: center;
`;
