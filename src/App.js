import './App.css';
import Menu from './components/Menu';
import React from 'react';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import  './css/style.css';
import './css/login.css';
import Account from './components/Account';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from './components/Students';
import Teachers from './components/Teachers';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
 
          <Menu />
          
          <Routes>
            <Route path="/" element={<Account />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
          </Routes>
          <Footer />
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
