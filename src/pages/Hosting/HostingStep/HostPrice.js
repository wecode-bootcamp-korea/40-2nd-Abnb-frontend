import React from 'react';
import styled from 'styled-components';

const HostPrice = ({ formData, onSubmit }) => {
  const { price } = formData;
  return (
    <HostPriceDiv>
      <HostPriceContainer>
        <HostPriceBox>
          <HostPriceSection>
            <HostPriceTitle>이제 요금을 설정하세요</HostPriceTitle>
            <MessageBox>
              <HostPriceMessage>
                언제든지 변경하실 수 있습니다.
              </HostPriceMessage>
            </MessageBox>
          </HostPriceSection>
          <PriceBody>
            <PriceBox>
              <Price
                value={price ? price : ''}
                onChange={e => onSubmit({ price: Number(e.target.value) })}
                placeholder="₩ _____"
              />
            </PriceBox>
            <PriceMessage>
              이 지역에서 비슷한 숙소의 요금은 보통 ₩
              {parseInt(price * 0.8).toLocaleString()} ~ ₩
              {parseInt(price * 1.2).toLocaleString()} 사이입니다.
            </PriceMessage>
          </PriceBody>
        </HostPriceBox>
      </HostPriceContainer>
    </HostPriceDiv>
  );
};

export default HostPrice;

const HostPriceDiv = styled.div`
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
`;

const HostPriceContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

const HostPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 630px;
  padding-top: 0px;
  animation: ${({ theme }) => theme.fadeIn} 1s linear alternate;
`;

const HostPriceSection = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
`;

const PriceBody = styled.div`
  border: 1px solid red;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  border: 1px solid #dddddd;
  border-radius: 12px;
`;

const PriceBox = styled.div`
  display: flex;
  margin-top: 0;
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px #b0b0b0;
  color: #222222;
  background-color: #ffffff;
`;

const Price = styled.input`
  width: 380px;
  border: none;
  outline: none;
  padding: 0;
  margin: 8px 12px;
  background-color: transparent;
  font-size: 48px;
  font-weight: 600;
  line-height: 80px;
  text-align: center;
`;

const PriceMessage = styled.div`
  width: 280px;
  padding-top: 24px;
  font-size: 18px;
  line-height: 24px;
`;

const HostPriceTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 400;
`;

const MessageBox = styled.div`
  width: 580px;
  margin-bottom: 32px;
`;

const HostPriceMessage = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: #717171;
`;
