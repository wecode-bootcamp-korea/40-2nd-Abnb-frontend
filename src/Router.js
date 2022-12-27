import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginModal from './pages/LoginModal/LoginModal';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/login" element={<LoginModal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
