import Home from './components/home.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './components/detail.tsx';
import Vote from './components/vote.tsx';
import Vote2 from './components/vote2.tsx';
import Modal from './components/modal.tsx';
import Navbar2 from './components/navbar2.tsx';
import AddPartai from './components/add-partai.tsx';
import Admin from './components/admin.tsx';
import Add from './components/add-paslon.tsx';
import ListPaslon from './components/list-paslon.tsx';
import ListPartai from './components/list-partai.tsx';
import Login from './components/login.tsx';
import Register from './components/register.tsx';
import './index.css';


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/register"

          element={<Register />} />
        <Route path="/login"

          element={<Login />} />

        <Route path="/detail"

          element={<Detail />} />
        <Route path="/list-paslon"

          element={<ListPaslon />} />

        <Route path="/list-partai"

          element={<ListPartai />} />


        <Route path="/"

          element={<Home />} />

        <Route path="/vote"

          element={<Vote />} />

        <Route path="/admin"

          element={<Admin />} />

        <Route path="/navbar2"

          element={<Navbar2 />} />

        <Route path="/vote2"

          element={<Vote2 />} />

        <Route path="/modal"

          element={<Modal />} />

        <Route path="/add-paslon"

          element={<Add />} />

        <Route path="/add-partai"

          element={<AddPartai />} />


      </Routes>

    </Router>
  );
}

export default App;
