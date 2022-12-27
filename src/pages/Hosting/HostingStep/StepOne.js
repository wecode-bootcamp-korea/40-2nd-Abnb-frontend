import React from 'react';
import styled from 'styled-components';

const StepOne = () => {
  return (
    <StepInitDiv>
      <StepInitContainer>
        <StepInitBox>
          <InitBox>
            <h1>호스트님의 숙소를 등록해보세요.</h1>
            <span>
              게스트가 예약할 수 있는 숙소를 등록하고, 게스트에게 살아볼 수 있는
              기회를 주세요.
            </span>
          </InitBox>
          <InitBox>
            <video muted autoPlay loop>
              <source src="/videos/step.mp4" type="video/mp4" />
            </video>
          </InitBox>
        </StepInitBox>
      </StepInitContainer>
    </StepInitDiv>
  );
};

export default StepOne;

const StepInitDiv = styled.div`
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
`;

const StepInitContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  height: 100%;
`;

const StepInitBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 90%;
  height: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
  }
`;

const InitBox = styled.div`
  flex-direction: column;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  span {
    max-width: 390px;
    font-size: 20px;
    margin-top: 50px;
    line-height: 1.4;
  }

  video {
    height: 98%;
    z-index: 10;
  }
`;
