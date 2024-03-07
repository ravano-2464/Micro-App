import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import Vote from "./pages/Vote";
import DetailPage from "./pages/DetailPage";
import Admin from "./pages/Admin";
import ListPaslon from "./pages/ListPaslon";
import AddPaslon from "./pages/AddPaslon";
import ListPartai from "./pages/ListPartai";
import AddPartai from "./pages/AddPartai";
import Carousel from "./components/Fragments/Carousel";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/carousel" Component={Carousel} />
          <Route path="/" Component={LandingPage} />
          <Route path="/vote" Component={Vote} />
          <Route path="/detail" Component={DetailPage} />
          <Route path="/admin" Component={Admin} />
          <Route path="/listpaslon" Component={ListPaslon} />
          <Route path="/listpartai" Component={ListPartai} />
          <Route path="/addpaslon" Component={AddPaslon} />
          <Route path="/addpartai" Component={AddPartai} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
