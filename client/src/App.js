import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Services from "./pages/Services";
import ProviderDashboard from "./pages/ProviderDashboard";
import ServicesSection from "./components/ServiceSection";

function App() {

return (

<Routes>

<Route path="/" element={<Landing/>} />

<Route path="/register" element={<Register/>} />

<Route path="/login" element={<Login/>} />

<Route path="/ServiceSection" element={<ServicesSection/>} />

<Route path="/provider-dashboard" element={<ProviderDashboard/>} />

<Route path="/explore-services" element={<Register/>} />

</Routes>

);
}

export default App;