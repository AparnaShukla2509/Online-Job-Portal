import React from 'react';

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import PostJob from './PostJob';
import Register from "./login/Components/RegisterYup";
import ForgotPassword from "./login/Components/ForgotPassword";
import Mdashboard from "./login/Components/Mdashboard";

function App() {
  return (
	  <Routes>
		  
      <Route path="/*" element={<Mdashboard />} />

      <Route path="/Login" element={<Mdashboard />} />

      <Route path="/Reset" element={<ForgotPassword />} />

      <Route path="/Register" element={<Register />} />
      {/* <Route path="*" element={<Navigate to="/Login" />} /> */}
    </Routes>
  );
}
export default App;