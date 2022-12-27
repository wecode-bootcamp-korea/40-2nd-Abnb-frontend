import React, { useEffect, useRef } from 'react';
import Calender from './Calender';
import { getDateFormat } from '../../utils/format';
import styled from 'styled-components';

const CalenderModal = ({
  setIsModal,
  reservations,
  startDate,
  endDate,
  onChange,
}) => {
  const ref = useRef();

  useEffect(() => {
    const handle = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsModal(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  });

  return (
    <ModalArea ref={ref}>
      <DateFix>
        <Date>날짜 선택</Date>
        <CheckIn name="checkin">{getDateFormat(startDate)}</CheckIn>
        <CheckOut name="checkout">{endDate && getDateFormat(endDate)}</CheckOut>
      </DateFix>
      <Calender startDate={startDate} endDate={endDate} onChange={onChange} />
    </ModalArea>
  );
};

export default CalenderModal;

const ModalArea = styled.div`
  position: absolute;
  right: 0px;
  top: 80px;
  padding: 30px;
  z-index: 1;
  border: 1px solid black;
  background-color: white;
  border-radius: 20px;
`;

const DateFix = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const Date = styled.div`
  font-size: 30px;
`;

const CheckIn = styled.div`
  width: 15vw;
  height: 3vw;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
`;

const CheckOut = styled.div`
  width: 15vw;
  height: 3vw;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
`;
