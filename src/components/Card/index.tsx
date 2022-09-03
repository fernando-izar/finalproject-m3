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

  return (
    <FlipCard>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1></h1>
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
  );
};
