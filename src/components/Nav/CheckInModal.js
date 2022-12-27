import React, { useState } from 'react';
import styled from 'styled-components';
import Calender from 'pages/Detail/Calender';

const CheckInModal = ({
  reservations,
  date,
  handleCheckIn,
  setStartDate,
  setEndDate,
  startDate,
  endDate,
}) => {
  const [isDefult, setIsDefult] = useState(true);

  const onChange = dates => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
    setIsDefult(false);
  };

  return (
    <CheckInModalArea>
      <SpanCheckIn>날짜 선택</SpanCheckIn>

      <Calender
        // onClick={handleCheckIn}
        name="checkIn"
        startDate={startDate}
        reservations={[]}
        endDate={endDate}
        onChange={onChange}
      />
    </CheckInModalArea>
  );
};

export default CheckInModal;

const CheckInModalArea = styled.div`
  position: absolute;
  top: 80px;
  left: 620px;
  background-color: white;
  width: 700px;
  height: 400px;
  border-radius: 20px;
`;

const SpanCheckIn = styled.div`
  width: 80px;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  color: #222222;
  display: flex;
  background-color: white;
  border: 1px solid black;
  margin-left: 330px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
