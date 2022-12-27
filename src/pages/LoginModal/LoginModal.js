import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

export const APIKEY = process.env.REACT_APP_API_KEY;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${APIKEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const LoginModal = ({ setIsOpen }) => {
  const close = useRef();

  const modalHandler = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handler = e => {
      if (close.current && !close.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  });

  return (
    <LoginContainer ref={close}>
      <LoginHeader>
        <button onClick={modalHandler}>✕</button>
        <div>로그인 또는 회원 가입</div>
        <div />
      </LoginHeader>
      <LoginBody>
        <LoginWelcome>
          <div>Abnb</div>
          <span>에어비앤비에 오신 것을 환영합니다.</span>
        </LoginWelcome>
        <LoginButton href={KAKAO_AUTH_URL}>
          <img alt="로그인" src="/images/kakao.png" />
        </LoginButton>
        <LoginGuideText>
          <span>
            카카오 로그인 페이지로 이동합니다. 간편하게 로그인 하신 후, 다양한
            서비스를 즐겨보세요.
          </span>
        </LoginGuideText>
      </LoginBody>
    </LoginContainer>
  );
};

export default LoginModal;

const LoginContainer = styled.div`
  position: fixed;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.4);
  background-color: #ffffff;
`;

const LoginHeader = styled.div`
  width: 500px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  button {
    border: none;
    background-color: #ffffff;
  }

  div {
    font-size: 16px;
    color: #222222;
  }
`;
const LoginGuideText = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #717171;
`;
const LoginBody = styled.div`
  width: 500px;
  height: 250px;
  padding: 24px;
  margin-bottom: 10px;
  border-top: 1px solid #eaeaea;
`;
const LoginWelcome = styled.h3`
  font-size: 30px;
  font-weight: 600;
  text-align: center;

  span {
    font-size: 16px;
  }
`;

const LoginButton = styled.a`
  img {
    width: 450px;
    height: 60px;
    object-fit: cover;
    margin: 25px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }
`;