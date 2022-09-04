import { Container } from "./styles";

export const CartCard = () => {
  return (
    <Container>
      <div className="flip-container">
        <div className="flipper">
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
    </Container>
  );
};
