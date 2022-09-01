import { CartDonations } from "../../components/CartDonations";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListCards } from "../../components/ListCards";
import { SearchBox } from "../../components/SearchBox";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header></Header>
      <div className="main-container">
        <main>
          <SearchBox></SearchBox>
          <ListCards></ListCards>
        </main>
        <aside>
          <CartDonations></CartDonations>
        </aside>
      </div>
      <Footer></Footer>
    </Container>
  );
};
