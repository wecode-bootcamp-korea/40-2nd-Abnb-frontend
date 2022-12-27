import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginModal from './pages/LoginModal/LoginModal';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Nav from './components/Nav/Nav';
import Main from 'pages/Main/Main';
import ProductList from 'pages/ProductList/ProductList';
import Test from 'components/Card/Test';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
