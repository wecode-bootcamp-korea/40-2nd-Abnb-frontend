import React from 'react';
import styled from 'styled-components';
import { HOST_LAST_MSG_DATA } from '../HostData/hostingData';

const StepLast = ({ formData }) => {
  const { title, description, price, imgs, address } = formData;

  return (
    <StepLastDiv>
      <StepLastContainer>
        <StepLastBox>
          <StepLastTitleSection>
            <StepLastTitle>숙소 검토하기</StepLastTitle>
            <MessageBox>
              <HostPriceMessage>
                게스트에게 표시되는 정보는 다음과 같습니다. 모든 정보가 정확한지
                확인하세요.
              </HostPriceMessage>
            </MessageBox>
          </StepLastTitleSection>
          <StepReviewSection>
            <MyHouseReview>
              <ReviewBox>
                <ReviewImg>
                  <img src={imgs[0].url} alt="home" />
                </ReviewImg>
                <ReviewName>
                  <div>{title}</div>
                  <span>₩{price.toLocaleString()}&nbsp;박</span>
                </ReviewName>
              </ReviewBox>
            </MyHouseReview>
            <LastReviewMsg>
              <h3>{description}</h3>
              <h3>{address}</h3>
              <h2>다음 단계</h2>
              {HOST_LAST_MSG_DATA.map(lastData => {
                return (
                  <LastHosting key={lastData.id}>
                    <img src={lastData.img} alt="board" />
                    <HostingMsg>
                      <div>{lastData.title}</div>
                      <span>{lastData.message}</span>
                    </HostingMsg>
                  </LastHosting>
                );
              })}
            </LastReviewMsg>
          </StepReviewSection>
        </StepLastBox>
      </StepLastContainer>
    </StepLastDiv>
  );
};

export default StepLast;

const StepLastDiv = styled.div`
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
`;

const StepLastContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

const StepLastBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 850px;
  padding-top: 0px;
`;

const StepLastTitleSection = styled.div`
  margin: auto;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 20px;
  width: 100%;
`;

const StepLastTitle = styled.h1`
  line-height: 50px;
  font-size: 48px;
  font-weight: 600;
`;

const MessageBox = styled.div`
  width: 580px;
  margin-top: 24px;
  margin-bottom: 28px;
  font-size: 18px;
`;

const HostPriceMessage = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: #717171;
`;

const StepReviewSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyHouseReview = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  width: 350px;
`;

const ReviewBox = styled.div`
  padding: 16px;
`;

const ReviewImg = styled.div`
  margin-bottom: 16px;
  height: 300px;

  img {
    border: 1px solid rgba(0, 0, 0, 0.04);
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    border-radius: 8px;
  }
`;

const ReviewName = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    margin-bottom: 5px;
    font-size: 15px;
    line-height: 19px;
  }

  span {
    font-weight: bold;
  }
`;

const LastReviewMsg = styled.div`
  max-width: 400px;
  align-self: center;
  margin-left: 70px;

  h2 {
    margin-bottom: 24px;
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
  }

  h3 {
    margin-bottom: 20px;
    padding-bottom: 15px;
    font-size: 18px;
    line-height: 22px;
    border-bottom: 1px solid rgb(235, 235, 235);
  }
`;

const LastHosting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
    margin-right: 16px;
  }
`;

const HostingMsg = styled.div`
  display: flex;
  flex-direction: column;

  div {
    font-size: 16px;
    margin-bottom: 2px;
  }

  span {
    color: #717171;
    font-size: 13px;
    line-height: 18px;
  }
`;
