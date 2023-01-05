import React, { useState } from 'react';
import styled from 'styled-components';
import NavInfo from './NavInfo';
import NavButton from './NavButton';
import User from '../../assets/nav/menu.png';
import Menu from '../../assets/nav/user.png';
import Logo from '../../assets/nav/Abnb.png';
import { useNavigate, useLocation } from 'react-router-dom';

const interruptedRoute = ['/hosting'];

const Nav = () => {
  const { pathname } = useLocation();
  const [isModal, setIsModal] = useState(false);
  const [isButtonModal, setIsButtonModal] = useState(false);
  const navigate = useNavigate();

  const isHide = interruptedRoute.some(path => path === pathname);

  const goMain = () => {
    navigate('/');
  };

  const onOpen = () => {
    setIsButtonModal(true);
  };
  const closeModal = () => {
    setIsButtonModal(false);
  };

  if (isHide) return <></>;
  return (
    <NavBar isButtonModal={isButtonModal}>
      <NavFlex onClick={goMain}>
        <RightLogo src={Logo} />
      </NavFlex>

      <NavButton
        isButtonModal={isButtonModal}
        onOpen={onOpen}
        onClose={closeModal}
      />

      <NavRight>
        <RightFont
          onClick={() => {
            navigate(`/hosting`);
          }}
        >
          당신의 공간을 에이비엔비하세요
        </RightFont>
        <NavUserInfo
          onClick={e => {
            e.stopPropagation();
            setIsModal(!isModal);
          }}
          className={isModal ? 'active' : ''}
        >
          <InfoIcon src={User} />
          <InfoIcon src={Menu} />
        </NavUserInfo>
        {isModal && <NavInfo setOpenModal={setIsModal} />}
      </NavRight>
    </NavBar>
  );
};

export default Nav;

const NavFlex = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const RightLogo = styled.img`
  width: 150px;
  padding-top: 5px;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 20px 50px;
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
  z-index: 6;
  background-color: white;
  box-shadow: ${props =>
    props.isButtonModal ? `0 0 0 9999px rgba(0, 0, 0, 0.4)` : `none`};
`;

const NavLogo = styled.h1`
  font-weight: bold;
  color: pink;
  font-size: 20px;
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`;

const RightFont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 1px 1px gray;
  }
`;

const NavUserInfo = styled.div`
  &.active {
    box-shadow: 1px 1px 1px 1px gray;
  }
  display: flex;
  justify-content: space-evenly;
  width: 90px;
  height: 40px;
  border: 1px solid #d3d3d3;
  border-radius: 20px;
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 1px 1px gray;
  }
`;

const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 7px;
`;
