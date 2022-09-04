import styled from "styled-components";

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
    color: black;

    background: #f4f4f4;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: #2b937f;

    img {
      width: 180px;
      height: 100px;
    }
  }

  .flip-card-back {
    background-color: #bdf1ea;
    color: white;
    transform: rotateY(180deg);

    background: #f4f4f4;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 12px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: #2b937f;
  }
`;
