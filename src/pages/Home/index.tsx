import { Container } from "./styles";
import { Header } from "../../components/Header";
import { DonationContext } from "../../contexts/DonationContext";
import { useContext } from "react";
import { MakeDonationModal } from "../../components/MakeDonationModal";
import { FormMakeDonationModal } from "../../components/FormMakeDonationModal";

export const Home = () => {
  const { isMakeDonationModal } = useContext(DonationContext);

  return (
    <Container>
      <Header></Header>

      {isMakeDonationModal && (
        <MakeDonationModal>
          <FormMakeDonationModal />
        </MakeDonationModal>
      )}
    </Container>
  );
};
