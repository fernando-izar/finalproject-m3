import { CartCard } from "../CartCard";
import { Container } from "./styles";

export const CartDonations = () => {
  return (
    <Container>
      <h2>Meu histórico</h2>
      <ul>
        <CartCard></CartCard>
        <CartCard></CartCard>
        <CartCard></CartCard>
        <CartCard></CartCard>
      </ul>
    </Container>
  );
};
