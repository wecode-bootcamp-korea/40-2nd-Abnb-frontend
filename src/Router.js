import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import KakaoLogin from './pages/LoginModal/KakaoLogin';
import LoginModal from './pages/LoginModal/LoginModal';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Nav from './components/Nav/Nav';
import Test from 'components/Card/Test';
import Footer from 'components/Footer.js/Footer';
import Detail from 'pages/Detail/Detail';
import Hosting from 'pages/Hosting/Hosting';
import Community from 'pages/Community/Commuity';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<ProductList />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/test" element={<Test />} />
        <Route path="/oauth/kakao/callback" element={<KakaoLogin />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list/:id" element={<Detail />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
