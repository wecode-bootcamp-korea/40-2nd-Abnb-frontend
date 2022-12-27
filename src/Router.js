import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouterWithout from 'RouterWithout';
import Hosting from './pages/Hosting/Hosting';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RouterWithout />} />
        <Route path="/hosting" element={<Hosting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
