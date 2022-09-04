import styled from "styled-components";

export const FlipCard = styled.div`
  background-color: transparent;
  width: 211px;
  height: 270px;
  perspective: 1000px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    text-transform: capitalize;
    background: #f4f4f4;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
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
    /* background-color: #bbb; */
    color: black;

    img {
      margin: 12px 11px 14px 13px;
    }

    .flip-card-front__food-information {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div:first-child {
        /*  background-color: blue; */
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: 13px;

        p {
          margin: 0 0 0 3px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          color: #2b937f;
        }

        span {
          background: #f5a7a1;
          border-radius: 9px;

          padding: 2px 5px 2px 5px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          line-height: 15px;

          color: #ffffff;
        }
      }

      div + div {
        /*  background-color: yellow; */
        width: 30%;
        margin-right: 20px;

        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;

          color: #2b937f;
        }
      }
    }

    .flip-card-front__donor-information {
      /* background-color: green; */

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      margin-top: 18px;
      margin-left: 20px;

      p {
        margin: 0;

        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;

        color: #2b937f;
      }

      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;

        color: #2b937f;
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
