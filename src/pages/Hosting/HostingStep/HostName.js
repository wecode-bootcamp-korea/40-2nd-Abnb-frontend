import React from 'react';
import styled from 'styled-components';

const HostName = ({ formData, onSubmit }) => {
  const { title, description } = formData;
  return (
    <HostNameDiv>
      <HostNameContainer>
        <HostNameBox>
          <HostNameBody>
            <HostNameSection>
              <HostNameTitle>이제 숙소에 이름을 지어주세요</HostNameTitle>
              <MessageBox>
                <HostNameMessage>
                  숙소 이름은 짧을수록 효과적입니다. 나중에 언제든지 변경할 수
                  있으니, 너무 걱정하지 마세요.
                </HostNameMessage>
              </MessageBox>
              <HostNameText>
                <NameArea
                  value={title}
                  rows={5}
                  onChange={e => onSubmit({ title: e.target.value })}
                />
              </HostNameText>
            </HostNameSection>
            <HostNameSection>
              <HostNameTitle>숙소 설명 작성하기</HostNameTitle>
              <MessageBox>
                <HostNameMessage>
                  숙소의 특징과 장점을 알려주세요.
                </HostNameMessage>
              </MessageBox>
              <HostNameText>
                <DescriptionArea
                  value={description}
                  rows={5}
                  onChange={e => onSubmit({ description: e.target.value })}
                />
              </HostNameText>
            </HostNameSection>
          </HostNameBody>
        </HostNameBox>
      </HostNameContainer>
    </HostNameDiv>
  );
};

export default HostName;

const HostNameDiv = styled.div`
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
`;

const HostNameContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

const HostNameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 630px;
  padding-top: 0px;
  animation: ${({ theme }) => theme.fadeIn} 1s linear alternate;
`;

const HostNameBody = styled.div`
  width: 100%;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
`;

const HostNameSection = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: 100%;
  height: 300px;
`;

const HostNameTitle = styled.h1`
  margin-bottom: 32px;
  font-size: 32px;
`;

const MessageBox = styled.div`
  width: 580px;
  margin-bottom: 32px;
`;

const HostNameMessage = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: #717171;
`;

const HostNameText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const NameArea = styled.textarea`
  width: 100%;
  padding: 24px;
  border-radius: 10px;
`;

const DescriptionArea = styled.textarea`
  width: 100%;
  padding: 24px;
  max-height: 50vh;
  font-size: 18px;
  line-height: 28px;
  border-radius: 10px;
`;
