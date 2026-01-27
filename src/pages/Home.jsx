import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Highlights from "../components/Highlights";
import Nav from "../components/Nav";
import PromoBanner from "../ui/PromoBanner";

function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Highlights />
      <PromoBanner />
      <Benefits />
      <Footer />
    </>
  );
}

export default Home;
