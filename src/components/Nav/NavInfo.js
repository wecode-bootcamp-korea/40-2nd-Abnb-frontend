import React, { useRef, useEffect, useState } from 'react';
import LoginModal from '../../pages/LoginModal/LoginModal';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';

const NavInfo = ({ setOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handle = e => {
      if (close && !close.current.contains(e.target)) {
        setOpenModal(false);
      }
    };

    document.addEventListener('click', handle);
    return () => {
      document.removeEventListener('click', handle);
    };
  });

  return (
    <NavInfor ref={close}>
      {INFORMATION.map(Info => {
        return (
          <>
            <InfoBlock key={Info.id}>
              <InfoLogin
                onClick={e => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}
              >
                {Info.Login}
              </InfoLogin>
              {isOpen && <LoginModal setIsOpen={setIsOpen} />}
            </InfoBlock>
            <InfoBlock>
              <InfoSignUp
                onClick={() => {
                  navigate(`/hosting`);
                }}
              >
                {Info.Abnb}
              </InfoSignUp>
            </InfoBlock>
          </>
        );
      })}
    </NavInfor>
  );
};

export default NavInfo;

const InfoBlock = styled.div`
  cursor: pointer;
`;

const NavInfor = styled.div`
  position: absolute;
  right: 90px;
  top: 67px;
  width: 200px;
  height: 100px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #d3d3d3;
  cursor: default;
`;
const InfoLogin = styled.div`
  margin-left: 5px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
  font-size: 14px;
  height: 30px;
  &:hover {
    background-color: #d3d3d3;
  }
`;
const InfoSignUp = styled.div`
  margin-left: 5px;
  font-weight: lighter;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  &:hover {
    background-color: #d3d3d3;
  }
`;

const INFORMATION = [
  {
    id: 1,
    Login: '로그인/회원가입',
    Abnb: '당신의 공간을 에이비엔비하세요',
  },
];
