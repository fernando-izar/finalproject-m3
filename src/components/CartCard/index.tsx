import { useContext } from "react";
import { IAllDataDonation } from "../../contexts/DonorContext";
import { Container } from "./styles";
import { DonationContext } from "../../contexts/DonationContext";

export const CartCard = ({
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
    <Container>
      <div className="flipper">
        <div className="front">
          <figure>
            <img src={chooseImg(classification)} alt={classification} />
          </figure>
          <div className="front-food">
            <p>{food}</p>
            <p>{classification}</p>
          </div>
          <div className="front-quantity">{quantity}</div>
        </div>
        <div className="back">
          <div className="back-food">
            <p>{food}</p>
            <p>{classification}</p>
          </div>
          <div className="back-address">
            <p>{user.name}</p>
            <p>{user.address}</p>
            <p>
              {user.city}/{user.state}
            </p>
            <p>{user.contact}</p>
          </div>
          <div className="back-quantity">
            <p>{quantity}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
