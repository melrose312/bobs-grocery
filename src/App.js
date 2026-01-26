
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Highlights from './components/Highlights'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Highlight from "./ui/Highlight";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <Highlights />
      </div>
    </Router>
  );
}

export default App;
