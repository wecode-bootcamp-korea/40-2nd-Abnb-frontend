import React from 'react';
import styled from 'styled-components';

const CheckOutModal = () => {
  return <CheckOutModalArea>체크아웃</CheckOutModalArea>;
};

export default CheckOutModal;

const CheckOutModalArea = styled.div`
  position: absolute;
  top: 80px;
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  left: 805px;
`;
