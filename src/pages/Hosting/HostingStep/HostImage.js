import React, { useState } from 'react';
import styled from 'styled-components';
import DropZone from '../DropZone/DropZone';

const HostImage = ({ formData, onSubmit }) => {
  const [fileUrlList, setFileUrlList] = useState([]);

  const fileUpload = e => {
    const imageList = e.target.files;
    let fileArray = [...fileUrlList];

    for (let i = 0; i < imageList.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageList[i]);
      fileArray.push({ url: currentImageUrl, file: imageList[i] });
    }

    if (fileArray.length > 5) {
      fileArray = imageList.slice(0, 5);
    }
    setFileUrlList(fileArray);
    onSubmit({ imgs: fileArray });
  };
  return (
    <HostImageDiv>
      <HostImgContainer>
        <ImgTitleDiv>
          <ImgTitle>숙소 사진 추가하기</ImgTitle>
          <MessageBox>
            <ImgMessage>
              숙소 등록을 시작하려면 사진 5장을 제출하셔야 합니다. 사진은 나중에
              추가하거나 변경하실 수 있습니다.
            </ImgMessage>
          </MessageBox>
        </ImgTitleDiv>
        <DropZone fileUrlList={fileUrlList} fileUpload={fileUpload} />
      </HostImgContainer>
    </HostImageDiv>
  );
};

export default HostImage;

const HostImageDiv = styled.div`
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
  animation: ${({ theme }) => theme.fadeIn} 1s linear alternate;
`;

const HostImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 630px;
  margin: auto;
`;

const ImgTitleDiv = styled.div`
  margin-bottom: 22px;
  background-color: transparent;
`;

const ImgTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 32px;
`;

const MessageBox = styled.div`
  width: 580px;
  margin-bottom: 32px;
`;

const ImgMessage = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: #717171;
`;
