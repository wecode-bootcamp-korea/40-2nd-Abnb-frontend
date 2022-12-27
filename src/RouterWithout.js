import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KakaoLogin from './pages/LoginModal/KakaoLogin';
import LoginModal from './pages/LoginModal/LoginModal';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Nav from './components/Nav/Nav';
import Test from 'components/Card/Test';
import Footer from 'components/Footer.js/Footer';
import Detail from 'pages/Detail/Detail';

const RouterWithout = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/test" element={<Test />} />
        <Route path="/oauth/kakao/callback" element={<KakaoLogin />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RouterWithout;
