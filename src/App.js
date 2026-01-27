
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Highlights from './components/Highlights'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PromoBanner from "./ui/PromoBanner";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <Highlights />
        <PromoBanner />
      <Benefits />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
