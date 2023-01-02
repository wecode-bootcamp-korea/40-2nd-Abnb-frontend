import React from 'react';
import styled from 'styled-components';
import Search from '../../assets/nav/돋보기.png';
import NavButtonClick from './NavButtonClick';

const NavButton = ({ isButtonModal, onOpen, onClose }) => {
  return (
    <NaviButton
      className={isButtonModal ? 'is-active' : ''}
      onClick={e => {
        e.stopPropagation();
        onOpen();
      }}
    >
      {isButtonModal ? <NavButtonClick closeModal={onClose} /> : null}
      {isButtonModal ? <span>숙소찾기</span> : '어디든지 | 언제든 일주일'}
      <ButtonRadious className={isButtonModal ? 'is-active' : ''}>
        <ButtonIcon src={Search} />
      </ButtonRadious>
    </NaviButton>
  );
};
export default NavButton;

const NaviButton = styled.button`
  &.is-active {
    box-shadow: none;
    span {
      position: relative;
      top: -60px;
      font-size: 20px;
    }
  }
  position: relative;
  width: 300px;
  height: 50px;
  border-radius: 20px;
  margin-left: 150px;
  background-color: white;
  box-shadow: 1px 1px 1px 1px gray;
  border: none;
  cursor: pointer;
`;

const ButtonIcon = styled.img`
  right: 10px;
  width: 25px;
  height: 25px;
  margin-top: 7px;
  filter: invert(100%);
`;
const ButtonRadious = styled.div`
  &.is-active {
    display: none;
  }
  position: absolute;
  top: 3px;
  right: 7px;
  border: 1px solid gray;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: #ff385c;
  border: none;
`;
