import React from 'react';
import styled from 'styled-components';

const HostInfo = ({ formData, onSubmit }) => {
  const { guest, bedroom, bed, bathroom } = formData;
  const hostInfo = { guest, bedroom, bed, bathroom };
  // console.log(Object.entries(hostInfo));

  // prop은 Read only
  // handleFormData를 만들었음!!
  // 어라? 핸들폼데이터에서 건들여주면 되지 않을까?

  const increaseBtn = type => e => {
    if (formData[type] === 5) return;
    onSubmit({ [type]: formData[type] + 1 });
  };

  const decreaseBtn = type => e => {
    if (formData[type] === 0) return;
    onSubmit({ [type]: formData[type] - 1 });
  };

  return (
    <HostInfoDiv>
      <HostInfoContainer>
        <HostBox>
          <InfoTitleDiv>
            <h1>숙소 기본 정보를 알려주세요</h1>
          </InfoTitleDiv>
          {Object.entries(hostInfo).map(([key, value]) => (
            <ChooseInfoDiv key={key}>
              <ChooseTitle>{key}</ChooseTitle>
              <ChooseCountBox>
                <ChooseButton onClick={decreaseBtn(key)}>-</ChooseButton>
                <div>{value}</div>
                <ChooseButton onClick={increaseBtn(key)}>+</ChooseButton>
              </ChooseCountBox>
            </ChooseInfoDiv>
          ))}
        </HostBox>
      </HostInfoContainer>
    </HostInfoDiv>
  );
};

export default HostInfo;

const HostInfoDiv = styled.div`
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
`;

const HostInfoContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

const HostBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 630px;
  padding-top: 0px;
  animation: ${({ theme }) => theme.fadeIn} 1s linear alternate;
`;

const InfoTitleDiv = styled.div`
  margin-bottom: 32px;
  background-color: transparent;

  h1 {
    margin-bottom: 0;
    font-size: 32px;
  }
`;

const ChooseInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ebebeb;
`;

const ChooseTitle = styled.div`
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;

const ChooseCountBox = styled.div`
  margin-left: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 115px;
  height: 32px;
`;

const ChooseButton = styled.button`
  width: 32px;
  height: 32px;
  text-decoration: none;
  background-color: #ffffff;
  color: #717171;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  font-size: 18px;
`;
