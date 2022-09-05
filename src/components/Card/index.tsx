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
          {/* Frente do card => igual para doador e donatário */}
          <img src={chooseImg(classification)} alt={classification} />
          <div className="flip-card-front__food-information">
            <div>
              <p>{food}</p>
              <span>{classification}</span>
            </div>
            <div>
              <p>{quantity}</p>
            </div>
          </div>

          <div className="flip-card-front__donor-information">
            <p>{user.name}</p>
            <span>
              {user.city}/{user.state}
            </span>
          </div>
        </div>

        <div className="flip-card-back">
          {currentUser?.type === "charity" ? (
            <>
              <div className="flip-card-back__information">
                <div className="flip-card-back__information--header">
                  <div className="flip-card-back__information--food">
                    <p>{food}</p>
                    <span>{classification}</span>
                  </div>

                  <div className="flip-card-back__information--quantity">
                    <p>Quantidade</p>
                    <span>{quantity}</span>
                  </div>
                </div>

                <div className="flip-card-back__information--donor-data">
                  <p>{user.name}</p>
                  <span>{`${user.address}, ${user.complement}`}</span>
                  <span>
                    {user.city}/{user.state}
                  </span>
                  <span>{user.contact}</span>
                </div>

                <div className="flip-card-back__information--expiration-date">
                  <p>Validade</p>
                  <span>{expiration}</span>
                </div>
              </div>
              <button onClick={() => onClickReserve(id)}>
                Reservar Alimento
              </button>
            </>
          ) : (
            <>
              <form action="">
                <input type="text" />
                <input type="text" />
                <button>alterar</button>
                <button>deletar</button>
              </form>
            </>
          )}
        </div>
      </div>
    </FlipCard>
  );
};
