import React from "react";
import KakaoLogin from "./KakaoLogin";
import { useEffect } from "react";
import axios from "axios";

const KakaoCallBack = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;

    const code = params.get("code");
    // const grant_type = "authorization_code";
    const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;

    const API_KEY = `${process.env.REACT_APP_REST_API_KEY}`;

    axios
      .get(
        `https://kauth.kakao.com/auth/token?grant_type=authorization_code&client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code=${code}`,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        const { access_token } = data;
        if (access_token) {
          console.log(`Bearer ${access_token}`);a
          axios
            .get(
              "http://kapi.kakao.com/v2/user/me ",
              {},
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-type": "application/x-www-form-urlencoded",
                },
              }
            )
            .then((res) => {
              console.log("suc data");
              console.log(res);
            });
        }
      });
  }, []);
  return <div>12313123123123123123</div>;