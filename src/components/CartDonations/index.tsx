import { useContext } from "react";
import { DonorContext } from "../../contexts/DonorContext";
import { CartCard } from "../CartCard";
import { Container } from "./styles";

export const CartDonations = () => {
  const { allDataDonations } = useContext(DonorContext);
  const idStorage = localStorage.getItem("@userID");

  return (
    <Container>
      <h2>Meu histórico</h2>
      <ul>
        {allDataDonations?.map(
          (element) =>
            idStorage &&
            +idStorage === element.userId && (
              <CartCard
                key={element.id}
                food={element.food}
                quantity={element.quantity}
                expiration={element.expiration}
                classification={element.classification}
                available={element.available}
                userId={element.userId}
                id={element.id}
                user={element.user}
              ></CartCard>
            )
        )}
      </ul>
    </Container>
  );
};
