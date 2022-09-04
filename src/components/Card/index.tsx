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
          <img src={chooseImg(classification)} alt={classification} />
          <p>{food}</p>
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
          )}
        </div>
      </div>
    </FlipCard>
  );
};
