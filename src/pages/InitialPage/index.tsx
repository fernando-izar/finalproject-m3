import { Container } from "./styles";
import initialPageImg from "../../assets/InitialPageDiamond.png";
import logo from "../../assets/Alimento-solidario3.png";
import { BigButton } from "../../components/BigButton";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export const InitialPage = () => {
  const { toRegister } = useContext(UserContext);
  return (
    <Container>
      <figure className="figBackground">
        <img className="imgBackground" src={initialPageImg} />
      </figure>
      <figure className="figLogo">
        <img className="imgLogo" src={logo} alt="" />
      </figure>
      <h1>Vamos juntos vencer a batalha contra a fome no Brasil!</h1>

      <BigButton onClick={() => toRegister()} type="submit">
        Entre você também nessa luta!
      </BigButton>
    </Container>
  );
};
