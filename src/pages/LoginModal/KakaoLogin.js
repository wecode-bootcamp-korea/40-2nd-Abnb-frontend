import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API_KEY, REDIRECT_URI } from './LoginModal';

export const BASE_URL = `http://10.58.52.106:8000/users/login`;

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();

  const getToken = async () => {
    const kakakoRes = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${API_KEY}&redirect_url=${REDIRECT_URI}&code=${code}`,
    });

    const { access_token } = await kakakoRes.json();

    if (!access_token) return alert('카카오 로그인 실패');

    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        authorization: access_token,
      },
    });

    const { accessToken } = await res.json();

    if (!accessToken) alert('로그인 실패');

    localStorage.setItem('token', accessToken);
    navigate('/');
  };

  useEffect(() => {
    getToken();
  });
  return <div>kakao 로그인</div>;
};

export default KakaoLogin;
