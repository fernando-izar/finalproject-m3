import styled from "styled-components";

export const Container = styled.li`
  background-color: transparent;
  width: 260px;
  height: 69px;
  /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25); */
  border-radius: 4px;
  perspective: 1000px;

  .flipper {
    position: relative;
    /* display: flex; */
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  :hover .flipper {
    transform: rotateX(180deg) /* rotateZ(180deg) */;
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .front {
    /* background-color: #bbb; */
    display: flex;
    background: #e4e4e4;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    color: #2b937f;

    figure {
      width: 65px;
      height: 43px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .back {
    display: flex;
    background: #f5f5f5;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #2b937f;
    transform: rotateX(180deg) /* rotateX(180deg) */;
  }
`;
