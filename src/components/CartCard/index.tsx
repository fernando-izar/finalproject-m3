import { Container } from "./styles";

export const CartCard = () => {
  return (
    <Container>
      <div className="flipper">
        <div className="front">Frente</div>
        <div className="back">Verso</div>
      </div>
    </Container>
  );
};
