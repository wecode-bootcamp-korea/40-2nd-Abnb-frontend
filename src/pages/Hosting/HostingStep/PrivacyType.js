import React from 'react';
import styled from 'styled-components';
import { TYPE_DATA } from '../HostData/hostingData';

const PrivacyType = ({ formData, onSubmit }) => {
  const { roomType } = formData;

  return (
    <TypeDiv>
      <TypeBox>
        <TypeTitleDiv>
          <TypeTitle>게스트가 사용할 숙소 유형</TypeTitle>
        </TypeTitleDiv>
        <ChooseTypeDiv>
          {TYPE_DATA.map(rooms => {
            return (
              <ChooseButton
                roomType={roomType}
                current={rooms.type}
                onClick={() => {
                  onSubmit({ roomType: rooms.type });
                }}
                key={rooms.id}
              >
                <MessageDiv>
                  <ButtonH2>{rooms.title}</ButtonH2>
                  <ButtonMessage>{rooms.message}</ButtonMessage>
                </MessageDiv>
                <ButtonIcon>
                  <IconImage src={rooms.image} alt="home" />
                </ButtonIcon>
              </ChooseButton>
            );
          })}
        </ChooseTypeDiv>
      </TypeBox>
    </TypeDiv>
  );
};

export default PrivacyType;

const TypeDiv = styled.div`
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
`;

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 630px;
  margin: auto;
  animation: ${({ theme }) => theme.fadeIn} 1s linear alternate;
`;

const TypeTitleDiv = styled.div`
  margin-bottom: 32px;
  background-color: transparent;
`;

const TypeTitle = styled.h1`
  margin-bottom: 0;
  font-size: 32px;
`;

const ChooseTypeDiv = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
`;

const ChooseButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  min-height: 88px;
  margin-bottom: 12px;
  background-color: ${({ current, roomType }) =>
    current === roomType ? '#f3f3f3' : '#ffffff'};
  border: ${({ current, roomType }) =>
    current === roomType ? '2px solid #000000' : '1px solid #dddddd'};
  border-radius: 12px;
  padding: 0px;
  cursor: pointer;

  &:hover {
    border-color: #000000;
  }
`;

const MessageDiv = styled.div`
  margin: 24px;
  text-align: left;
  width: 100%;
`;

const ButtonH2 = styled.h2`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

const ButtonMessage = styled.div`
  max-width: 400px;
  font-size: 14px;
  line-height: 18px;
  color: #717171;
  margin-top: 4px;
`;

const ButtonIcon = styled.div`
  margin-left: 8px;
  margin-right: 24px;
  margin-top: 26px;
  color: white;
`;

const IconImage = styled.img`
  width: 34px;
  height: 34px;
`;
