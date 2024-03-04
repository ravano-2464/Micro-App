import React, { ChangeEvent } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from './components/login.tsx';
import Register from './components/register.tsx';
import './index.css';
import { isAuth } from './interface/auth.ts';

import Navbar2 from './components/navbar2.tsx';
import HomeAdmin from './components/homeadmin.tsx';
import AddPartai from './components/add-partai.tsx';
import AddPaslon from './components/add-paslon.tsx';
import ListPaslon from './components/list-paslon.tsx';
import ListPartai from './components/list-partai.tsx';
import Home from './components/home.tsx';
import Detail from './components/detail.tsx';
import Modal from './components/modal.tsx';
import Vote from './components/vote.tsx';
import Vote2 from './components/vote2.tsx';

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isLoginAdmin, setIsLoginAdmin] = React.useState<boolean>(false);
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<isAuth>({
    username: 'Ravano',
    password: 'admin'
  });

  function handleSetForm(e: ChangeEvent<HTMLInputElement>): void {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function login() {
    if (form.username === "Ravano" && form.password === "admin") {
      setIsLoginAdmin(true);
      navigate("/homeadmin");
    } else {
      setIsLogin(true);
      navigate("/home");
    }
  }

  function PrivateRoute() {
    if (isLogin) {
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  }

  function PrivateRouteAdmin() {
    if (isLoginAdmin) {
      return <Outlet />;
    } else {
      return (
        <>
          <Navigate to="/" />
          <Navigate to="/homeadmin" />
          <Navigate to="/add-partai" />
          <Navigate to="/add-paslon" />
        
        </>
      );
    } 
  }

  return (
    <Routes>
      <Route path="/" element={<Login handle={handleSetForm} login={login} />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<PrivateRouteAdmin />}>
        <Route path="/navbar2" element={<Navbar2 />} />
        <Route path="/homeadmin" element={<HomeAdmin />} />
        <Route path="/add-partai" element={<AddPartai />} />
        <Route path="/add-paslon" element={<AddPaslon />} />
        <Route path="/list-partai" element={<ListPartai />} />
        <Route path="/list-paslon" element={<ListPaslon />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/vote2" element={<Vote2 />} />
      </Route>
    </Routes>
  );
};

const AppWithRouter: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;