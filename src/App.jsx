import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Orderonline from './pages/Orderonline';
import Reservation from './pages/Reservation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path='/Orderonline' element={<Orderonline />}/>
          <Route path='/Reservation' element={<Reservation />}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
