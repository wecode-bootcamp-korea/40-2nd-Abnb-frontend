import React from 'react';
import styled from 'styled-components';

const CheckInModal = () => {
  return <CheckInModalArea>체크인</CheckInModalArea>;
};

export default CheckInModal;

const CheckInModalArea = styled.div`
  position: absolute;
  top: 80px;
  left: 700px;
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 20px;
`;
