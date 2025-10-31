import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import SidebarMenu from "./components/SidebarMenu";
import Home from "./pages/Home";
import AddProperty from "./pages/AddProperty";
import MyApartments from "./pages/MyApartments";
import Premium from "./pages/Premium";
import PremiumSuccess from "./pages/PremiumSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="app">
        <SidebarMenu isLandlord={true} />
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/my-apartments" element={<MyApartments />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/premium-success" element={<PremiumSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;