import { useContext } from "react";
import { DonorContext } from "../../contexts/DonorContext";
import { IAllDataDonation } from "../../contexts/DonorContext";
import { FlipCard } from "./styles";
import cereais from "../../assets/Cereais2.png";
import enlatados from "../../assets/Enlatados1.png";
import hortifruti from "../../assets/Hortifruti1.png";
import laticinios from "../../assets/Laticinios.jpg";
import padaria from "../../assets/Paes1.png";

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
  const { allDataDonations } = useContext(DonorContext);

  const chooseImg = (value: string) => {
    switch (value) {
      case "cereais":
        return cereais;
      case "enlatados":
        return enlatados;
      case "hortifruti":
        return hortifruti;
      case "laticinios":
        return laticinios;
      case "padaria":
        return padaria;
      default:
        return "";
    }
  };

  return (
    <FlipCard>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={chooseImg(classification)} alt="" />
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
