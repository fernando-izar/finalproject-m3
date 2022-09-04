import { useContext } from "react";
import { IAllDataDonation } from "../../contexts/DonorContext";
import { FlipCard } from "./styles";
import { DonationContext } from "../../contexts/DonationContext";
import { UserContext } from "../../contexts/UserContext";
import { ReservationContext } from "../../contexts/ReservationContext";

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
  const { user: currentUser } = useContext(UserContext);
  const { onClickReserve } = useContext(ReservationContext);

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

          {currentUser?.type === "donor" ? (
            <>
              <button>Alterar</button>
              <button>Excluir</button>
            </>
          ) : (
            <button onClick={() => onClickReserve(id)}>Reservar</button>
          )}
        </div>
      </div>
    </FlipCard>
  );
};
