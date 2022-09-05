import styled from "styled-components";
import image from "../../assets/RegisterPageIMG.jpg";

export const Container = styled.div`
  @media screen and (min-width: 541px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    .formRegister {
      position: absolute;
      margin-top: 100px;
      width: 660px;
      height: 450px;
      background-color: rgba(244, 244, 244, 0.68);
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
    }

    .divRadio {
      display: flex;
      justify-content: center;
    }

    .divFormFields {
      width: 100 rem;
      margin-left: 30px;
    }

    .divButtonRegister {
      width: 100 rem;

      display: flex;
      justify-content: center;
    }
  }

  @media screen and (max-width: 540px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    .formRegister {
      position: absolute;
      margin-top: 100px;
      width: 350px;
      height: 700px;
      background-color: rgba(244, 244, 244, 0.68);
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
    }

    .divRadio {
      display: flex;
      justify-content: center;
    }

    .divFormFields {
      width: 100 rem;
      margin-left: 30px;
    }

    .divButtonRegister {
      width: 100 rem;

      display: flex;
      justify-content: center;
    }
  }
`;
