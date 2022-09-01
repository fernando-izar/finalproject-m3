import { Container, FlipCard } from "./styles";
import hortifruti from "../../assets/Hortifruti1.png";

export const Card = () => {
  return (
    <Container>
      <FlipCard>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={hortifruti} alt="hortifruti" />
          </div>
          <div className="flip-card-back">
            <h1>teste tag h1</h1>
            <p>teste tag p</p>
            <button onClick={() => window.alert("button works")}>
              button test
            </button>
          </div>
        </div>
      </FlipCard>
    </Container>
  );
};
