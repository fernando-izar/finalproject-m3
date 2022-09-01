import styled from "styled-components";

export const Container = styled.div``;

export const FlipCard = styled.div`
  background-color: transparent;
  width: 200px;
  height: 200px;
  perspective: 1000px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  :hover .flip-card-inner {
    /* transform: rotateY(180deg); */
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #bdf1ea;
    color: white;
    transform: rotateY(180deg);
  }
`;
