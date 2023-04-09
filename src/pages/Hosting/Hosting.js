import React, { useState } from 'react';
import styled from 'styled-components/macro';
import HostInfo from './HostingStep/HostInfo';
import HostName from './HostingStep/HostName';
import PrivacyType from './HostingStep/PrivacyType';
import StepOne from './HostingStep/StepOne';
import HostCategory from './HostingStep/HostCategory';
import HostMap from './HostingStep/HostMap';
import HostImage from './HostingStep/HostImage';
import HostPrice from './HostingStep/HostPrice';
import StepLast from './HostingStep/StepLast';
import { Navigate, useNavigate } from 'react-router-dom';

const INIT_FORM = {
  category: '한옥',
  roomType: 'private',
  title: '',
  description: '',
  guest: 1,
  bedroom: 1,
  bed: 1,
  bathroom: 1,
  address: '',
  lat: '',
  lng: '',
  imgs: [],
  price: '',
};

const Hosting = () => {
  const [formData, setFormData] = useState(INIT_FORM);
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleFormData = payload => {
    setFormData({ ...formData, ...payload });
  };

  const navigate = useNavigate();
  const Forms = [
    <StepOne key="stepOne" />,
    <HostCategory
      key="hostCategory"
      formData={formData}
      onSubmit={handleFormData}
    />,
    <PrivacyType
      key="privacyType"
      formData={formData}
      onSubmit={handleFormData}
    />,
    <HostMap key="hostMap" formData={formData} onSubmit={handleFormData} />,
    <HostInfo key="hostInfo" formData={formData} onSubmit={handleFormData} />,
    <HostImage key="hostImage" formData={formData} onSubmit={handleFormData} />,
    <HostName key="hostName" formData={formData} onSubmit={handleFormData} />,
    <HostPrice key="hostPrice" formData={formData} onSubmit={handleFormData} />,
    <StepLast key="stepLast" formData={formData} onSubmit={handleFormData} />,
  ];

  const currentPage = Forms[currentIdx];

  const onClickPrevPage = () => {
    if (currentIdx === 0) return;
    setCurrentIdx(prev => prev - 1);
  };

  const onClickNextPage = () => {
    if (
      (currentIdx === 3 && !formData.address) ||
      (currentIdx === 6 && !formData.title && !formData.description) ||
      (currentIdx === 7 && !formData.price)
    ) {
      checkAlert();
      return;
    }

    if (currentIdx === 5 && formData.imgs.length < 5) {
      alert('사진은 5장 이상 등록하셔야 합니다.');
      return;
    }

    if (currentIdx === Forms.length - 1) return;
    setCurrentIdx(prev => prev + 1);
  };

  const checkAlert = () => {
    alert('숙소 정보를 정확히 입력해주세요.');
    return;
  };

  const onClickDone = () => {
    if (Object.values(formData).every(value => value)) {
      onFormDataFetch();
    } else {
      alert('숙소 등록에 실패하였습니다. 다시 한번 확인해주세요.');
    }
  };

  const onFormDataFetch = () => {
    const newFormData = new FormData();
    newFormData.append('category', formData.category);
    newFormData.append('roomType', formData.roomType);
    newFormData.append('title', formData.title);
    newFormData.append('description', formData.description);
    newFormData.append('guest', formData.guest);
    newFormData.append('bedroom', formData.bedroom);
    newFormData.append('bed', formData.bed);
    newFormData.append('bathroom', formData.bathroom);
    newFormData.append('address', formData.address);
    newFormData.append('lat', formData.lat);
    newFormData.append('lng', formData.lng);
    for (let i = 0; i < formData.imgs.length; i++) {
      newFormData.append('imgs', formData.imgs[i].file);
    }
    newFormData.append('price', formData.price);

    //TODO : 통신확인 후 주석 삭제 예정
    // for (let [key, value] of newFormData.entries()) {
    //   console.log(key, value);
    // }

    // for (let value of newFormData.values()) {
    //   console.log('value', value);
    // }

    //TODO : Back단과 통신연결 예정
    fetch('http://10.58.52.154:8000/products/host', {
      method: 'POST',

      body: newFormData,
    })
      .then(res => res.json())
      .then(data => {
        alert('호스트님 환영합니다! 숙소 등록이 완료되었습니다.');
        Navigate('/');
      });
  };

  return (
    <HostingDiv>
      <HostingNav>
        <NavContainer>
          <Logo src="./images/Host/LOGO.png" alt="logo" />
          <NavButton>나가기</NavButton>
        </NavContainer>
      </HostingNav>
      {currentPage}
      <HostFooter>
        <FooterDiv>
          <StepBar count={currentIdx} />
          <StepButton>
            <PrevButton onClick={onClickPrevPage}>뒤로</PrevButton>
            {currentIdx === Forms.length - 1 ? (
              <NextButton
                onClick={() => {
                  onClickDone();

                  // navigate('/');
                  // alert(`호스트님 환영합니다! 숙소 등록이 완료되었습니다.`);
                }}
              >
                완료
              </NextButton>
            ) : (
              <NextButton onClick={onClickNextPage}>다음</NextButton>
            )}
          </StepButton>
        </FooterDiv>
      </HostFooter>
    </HostingDiv>
  );
};

export default Hosting;

const HostingDiv = styled.div`
  width: 100wh;
  height: 100vh;
`;

const HostingNav = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 70px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: #ffffff;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 30px 48px 0px;
`;

const Logo = styled.img`
  margin-right: auto;
  width: 80px;
  height: 45px;
`;

const NavButton = styled.button`
  text-align: center;
  width: 78px;
  background-color: transparent;
  padding-left: 16px;
  padding-right: 16px;
  height: 40px;
  border: 1px solid #dddddd;
  border-radius: 32px;
  &:hover {
    border-color: #000000;
  }
`;

const HostFooter = styled.div`
  position: fixed;
  width: 100vw;
  height: 86px;
  bottom: 0px;
  background-color: inherit;
  z-index: 2;
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const StepBar = styled.div`
  position: absolute;
  left: 0;
  width: ${({ count }) => (count / 8) * 100}%;
  height: 6px;
  background: linear-gradient(90deg, #fbd3e9 0%, #ff385c 100%);
  border-radius: 3px;
  transition: 0.8s;
`;

const StepButton = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: space-between;
`;

const PrevButton = styled.button`
  margin-left: 48px;
  font-size: 15px;
  cursor: pointer;
  text-decoration: underline;
  background: transparent;
  border: none;
`;

const NextButton = styled.button`
  background-color: #000000;
  margin-right: 48px;
  padding-left: 32px;
  padding-right: 32px;
  cursor: pointer;
  border-color: black;
  border-radius: 10px;
  color: #ffffff;
`;
