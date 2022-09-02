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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    /*  border-radius: 8px; */
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

    .flip-card-front__food-information {
      display: flex;
      justify-content: space-between;
      background-color: tomato;

      div:first-child {
        background-color: blue;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        p {
          margin: 0;
        }

        span {
          background-color: pink;
          border-radius: 25%;
        }
      }

      div + div {
        background-color: yellow;
        width: 25%;
      }
    }

    .flip-card-front__donor-information {
      display: flex;
      flex-direction: column;
      background-color: green;
      align-items: flex-start;
      justify-content: center;

      p {
        margin: 0;
      }
    }
  }

  .flip-card-back {
    background-color: #bdf1ea;
    color: black;
    transform: rotateY(180deg);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .flip-card-back__information {
      background-color: yellow;

      div:nth-child(1) {
        background-color: red;
      }
      div:nth-child(2) {
        background-color: green;
      }
      /*  div:nth-child(3) {
        background-color: blue;
      } */
    }
    .flip-card-back__buttons {
      background-color: pink;
    }
  }
`;
