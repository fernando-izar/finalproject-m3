import styled from "styled-components";
import image from "../../assets/loginPageImg.png";

export const Container = styled.div`
  @media screen and (max-width: 540px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .formLogin {
      position: absolute;
      margin-top: 100px;
      margin-left: 5vw;
      width: 350px;
      height: 340px;
      background-color: rgba(244, 244, 244, 0.68);
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
    }

    .pMsgReg {
      font-family: "Inter";
      font-size: 13px;
      font-weight: 500;
      color: #2b937f;
      margin-left: 18%;
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 541px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .formLogin {
      position: absolute;
      margin-top: 100px;
      margin-left: 57vw;
      width: 460px;
      height: 340px;
      background-color: rgba(244, 244, 244, 0.68);
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
    }

    .pMsgReg {
      font-family: "Inter";
      font-size: 13px;
      font-weight: 500;
      color: #2b937f;
      margin-left: 24%;
      margin-top: 10px;
    }
  }
`;
