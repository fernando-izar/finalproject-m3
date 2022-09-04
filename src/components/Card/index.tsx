import { useContext } from "react";
import { IAllDataDonation } from "../../contexts/DonorContext";
import { FlipCard } from "./styles";
import { DonationContext } from "../../contexts/DonationContext";

export const Card = ({
  food,
  quantity,
  expiration,
  classification,
  available,
  userId,
  id,
  user,
}: IAllDataDonation) => {
  const { chooseImg } = useContext(DonationContext);

  return (
    <FlipCard>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* Frente do card => igual para doador e donatário */}
          <img src={chooseImg(classification)} alt={classification} />
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

          {/* Abaixo estão as modificações feitas pelo Fernando */}
          {/* <img src={chooseImg(classification)} alt={classification} /> */}
          {/* <p>{food}</p>
          <p>{classification}</p>
          <p>{quantity}</p>
          <p>{user.name}</p>
          <p>
            {user.city}/{user.state}
          </p>
        </div>
        <div className="flip-card-back">
          <p>{food}</p>
          <p>{classification}</p>
          <p>Validade</p>
          <p>{expiration}</p>
          <p>Quantidade</p>
          <p>{quantity}</p>

          {user.type === "donor" ? (
            <>
              <button>Alterar</button>
              <button>Excluir</button>
            </>
          ) : (
            <button>Reservar</button>
          )} */}
        </div>
      </div>
    </FlipCard>
  );
};
