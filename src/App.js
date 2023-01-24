import React from 'react';
// import { Button } from 'antd';
// import './App.css'
import FirstPage from './pages/First.js'
import SecondPage from './pages/Second.js'
import { Routes, Route } from 'react-router-dom'


const App = () => (
  <div className="main">
    <Routes>
      <Route path='/' element={<FirstPage />} />
      <Route path='/Second.js' element={<SecondPage />} />
    </Routes>
  </div>
);

export default App;