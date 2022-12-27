import React from 'react';
import styled from 'styled-components';

const Modal = ({ setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <AirCoverDetail>
        <Button onClick={closeModal}>x</Button>
        <AirCover>
          <h1>
            <Span>에어</Span> 커버
          </h1>
          <DetailText>
            에어커버는 모든 예약에 적용되는 포괄적인 보호 장치입니다.
          </DetailText>
          <AuccuaryText>
            숙소 정확도 보장
            <NextDetail>
              냉장고가 고장 났는데 호스트가 쉽게 고칠 수 없는 경우, 침실 수가
              숙소 페이지에 표시된 것보다 적은 경우 등 숙박 중 언제라도 실제
              숙소가 숙소 페이지 설명과 다른 것을 알게 될 경우, 문제 발견
              시점으로부터 3일 이내에 신고해주세요. 에어비앤비에서 비슷한 숙소
              또는 더 나은 숙소를 찾아드리거나 요금을 환불해드립니다.
            </NextDetail>
          </AuccuaryText>
        </AirCover>
      </AirCoverDetail>
    </div>
  );
};

export default Modal;

const AirCoverDetail = styled.div`
  position: absolute;
  background-color: white;
  z-index: 5;
`;

const Button = styled.div`
  border: none;
  background-color: white;
  width: 1%;
  height: 1%;
  z-index: -1;

  &:hover {
    cursor: pointer;
    background-color: #717171;
    border-radius: 100%;
  }
`;

const AirCover = styled.div`
  width: 80%;
  background-color: white;
  color: black;
  font-size: 20px;
  border-top: 1px solid black;
`;

const Span = styled.span`
  font-size: 20px;
  color: red;
`;

const DetailText = styled.div`
  font-size: 14px;
`;

const AuccuaryText = styled.div`
  font-size: 20px;
`;

const NextDetail = styled.div`
  font-size: 14px;
`;
