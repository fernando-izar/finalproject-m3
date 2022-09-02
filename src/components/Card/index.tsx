import { FlipCard } from "./styles";
import hortifruti from "../../assets/Hortifruti1.png";

export const Card = () => {
  return (
    <FlipCard>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* Frente do card => igual para doador e donatário */}
          <img src={hortifruti} alt="hortifruti" />
          <div className="flip-card-front__food-information">
            <div>
              <p>Alface</p>
              <span>Hortifruti</span>
            </div>
            <div>
              <p>5Kg</p>
            </div>
          </div>
          <div className="flip-card-front__donor-information">
            <p>Pão de Açúcar</p>
            <p>São José do Rio Preto/SP</p>
          </div>
        </div>

        <div className="flip-card-back">
          {/* Atrás do card para doador*/}
          <div className="flip-card-back__information">
            <div className="flip-card-back__information--food">
              <p>Alface</p>
              <span>Hortifruti</span>
            </div>
            <div className="flip-card-back__information--expiration-date">
              <p>Validade</p>
              <span>12/12/2022</span>
            </div>
            <div className="flip-card-back__information--quantity">
              <p>Quantidade</p>
              <span>5kg</span>
            </div>
          </div>
          <div className="flip-card-back__buttons">
            <button>Alterar</button>
            <button>Excluir</button>
          </div>
        </div>
      </div>
    </FlipCard>
  );
};
