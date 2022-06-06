import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  .items-wrapper {
    width: 100vw;
  }
  .items {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
  .item {
    flex: none;
    width: 100%;
    height: 400px;

    scroll-snap-align: start;
    pointer-events: none;
  }
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;