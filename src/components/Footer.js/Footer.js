import React from 'react';
import styled from 'styled-components';
import { flexBox } from 'utils/variables';

const Footer = () => {
  return (
    <FooterContainer>
      <InfoBox>
        <FooterListBox>
          {FOOTER_MAP.map((list, index) => (
            <FooterList key={index}>{list}</FooterList>
          ))}
        </FooterListBox>
        <FooterInfoBox>
          <FooterInfo>
            <img alt="language" src="images/Footer/earth.png" />
            <span>한국어 (KR)</span>
          </FooterInfo>
          <FooterInfo>
            <img alt="currency" src="images/Footer/korea-won.png" />
            <span>KRW</span>
          </FooterInfo>
          <FooterInfo>
            <span>지원 및 참고 자료</span>
            <UnfoldButton>⌃</UnfoldButton>
          </FooterInfo>
        </FooterInfoBox>
      </InfoBox>
      <CopyRightContainer>
        <CopyRightBox>
          웹사이트 제공자: Abnb Team, Wecode 40 2nd Project Team HaHaHaHaHa, We
          Are The One | 이사: JeongWoo Lee, NaJeong park | VAT 번호: IE9827384L
          | 사업자 등록 번호: IE 511825 | 연락처: abnbteam@abnb.com, 웹사이트,
          2022-1230 | 전체 서비스 제공업체: 에이비앤비 | 에이비앤비는 위코드
          40기 2차 프로젝트 팀으로서 그럴듯한 웹사이트를 제공하기 위해 최선을
          다하고 있습니다. 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사
          우리나라 만세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이
          보전하세. 웹사이트 정보 공유 중입니다. 2차 프로젝트 진행중입니다.
        </CopyRightBox>
      </CopyRightContainer>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.div`
  background-color: white;
  border: 1px solid #dcdddd;
  bottom: 0;
  position: fixed;
  z-index: 1;
`;

const InfoBox = styled.div`
  width: 92%;
  border-bottom: 1px solid #dcdddd;
  margin: auto;
  padding: 7px 0;
  ${flexBox('space-between')}
`;

const FooterListBox = styled.div`
  display: flex;
  align-items: center;
`;
const FooterList = styled.span`
  color: #222222;
  font-size: 14px;
  padding-right: 7px;
  line-height: 18px;
  &:not(:first-child)::before {
    content: '・ ';
  }
`;

const FooterInfoBox = styled.div`
  display: flex;
`;

const FooterInfo = styled.span`
  color: #222222;
  font-size: 14px;
  font-weight: 600;
  padding-left: 15px;
  ${flexBox('space-between')}

  img {
    padding-right: 10px;
  }
`;

const UnfoldButton = styled.button`
  font-weight: 600;
  margin: 10px;
  background-color: transparent;
  border: none;
`;

const CopyRightContainer = styled.div`
  width: 92%;
  ${flexBox()}
  margin: auto;
`;

const CopyRightBox = styled.div`
  color: #717171;
  font-size: 10px;
  padding: 10px 0;
`;

const FOOTER_MAP = [
  '© 2022 Abnb, Ateam',
  '개인정보',
  '처리방침',
  '이용약관',
  '사이트맵',
  '한국의 변경된 환불 정책',
  '회사 세부정보',
];
