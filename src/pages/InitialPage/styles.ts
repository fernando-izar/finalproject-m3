import styled from "styled-components";
import image from "../../assets/InicialPageIMG.jpg";
import { BigButton } from "../../components/BigButton";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .figBackground {
    width: 100vw;
    height: 100vh;
    .imgBackground {
      width: 100vw;
      height: 100vh;
    }
  }

  .figLogo {
    margin-top: -850px;
    margin-left: 50vw;
  }

  h1 {
    width: 750px;
    font-size: 70px;
    font-weight: 700;
    line-height: 70px;
    color: #ffffff;
    font-family: "Inter";
    margin-top: 120px;
    margin-left: 30vw;
    text-align: center;
  }
`;
