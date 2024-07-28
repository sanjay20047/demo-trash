import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/static/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/user/Profile';
import ViewCoins from './components/user/ViewCoins';
import ConvertCoins from './components/user/ConvertCoins';
import Shop from './components/user/Shop';
import MySubmission from './components/user/MySubmissions';
import SubmitWaste from './components/user/SubmitWaste';
import Navbar from './components/common/Navbar';
import Resident from './components/user/Resident';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // Determine if Navbar should be shown based on the current route
  const showNavbar = !['/login', '/register'].includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-coins" element={<ViewCoins />} />
        <Route path="/convert-coins" element={<ConvertCoins />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mysubmission" element={<MySubmission />} />
        <Route path="/submitwaste" element={<SubmitWaste />} />
        <Route path="/resident" element={<Resident />} />
        <Route path="/tes" element={<div><p>tessttt</p></div>} />
      </Routes>
    </div>
  );
};

export default App;
