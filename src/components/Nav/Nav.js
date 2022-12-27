import React, { useState } from 'react';
import styled from 'styled-components';
import NavInfo from './NavInfo';
import NavButton from './NavButton';
import User from '../../assets/nav/menu.png';
import Menu from '../../assets/nav/user.png';
import Logo from '../../assets/nav/a-bnb-logo.png';

const Nav = () => {
  const [isModal, setIsModal] = useState(false);
  const [isButtonModal, setIsButtonModal] = useState(false);

  return (
    <NavBar isButtonModal={isButtonModal}>
      <NavFlex>
        <RightLogo src={Logo} />
        <NavLogo>A-bnb</NavLogo>
      </NavFlex>

      <NavButton
        isButtonModal={isButtonModal}
        setIsButtonModal={setIsButtonModal}
      />

      <NavRight>
        <RightFont>당신의공간을 에이비엔비하세요</RightFont>
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

const NavFlex = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RightLogo = styled.img`
  width: 50px;
  height: 50px;
  color: pink;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
  z-index: 5;
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
  margin-right: 70px;
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
