import React from 'react';
import styled from 'styled-components';

const DropZone = ({ fileUrlList, fileUpload }) => {
  return (
    <ImgUploadDiv>
      {fileUrlList.length > 0 && (
        <ImgContainer>
          {fileUrlList.map(({ url: image }, id) => {
            return (
              <ImgsBox key={id}>
                <img src={image} alt={`${image}-${id}`} />
              </ImgsBox>
            );
          })}
        </ImgContainer>
      )}
      <ImgUploadContainer>
        <ImgUploadIcon src="./images/Host/images.png" />
        <ImgUploadTitle>여기에 사진을 추가하세요.</ImgUploadTitle>
        <span>5장 이상의 사진을 선택하세요.</span>
        <UploadMessage>
          <label htmlFor="file">
            <div>기기에서 업로드</div>
          </label>
          <input
            name="file"
            id="file"
            type="file"
            multiple
            accept="image/*"
            onChange={fileUpload}
          />
        </UploadMessage>
      </ImgUploadContainer>
    </ImgUploadDiv>
  );
};

export default DropZone;

const ImgUploadDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  width: 100%;
  max-width: 640px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const ImgUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45vh;
  border: 1px dashed #b0b0b0;
  cursor: pointer;

  span {
    padding-top: 16px;
    font-size: 16px;
  }
`;

const ImgUploadIcon = styled.img`
  width: 64px;
  height: 64px;
`;

const ImgUploadTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  padding-top: 16px;
`;

const UploadMessage = styled.span`
  cursor: pointer;
  div {
    font-size: 14px;
    border-bottom: solid;
  }

  input {
    display: none;
  }
`;

const ImgsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;

  img {
    width: 100%;
    height: 45vh;
    object-fit: contain;
  }
`;
