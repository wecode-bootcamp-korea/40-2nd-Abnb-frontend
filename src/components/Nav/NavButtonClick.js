import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Search from '../../assets/nav/돋보기.png';
import TravelSelectModal from './TravelSelectModal';
import CheckInModal from './CheckInModal';
import PersonnalModal from './PersonnalModal';
import { getDateFormat } from '../../utils/format';

const NavButtonClick = ({ setOpenModal }) => {
  const [dataForm, setDataForm] = useState({
    area: '',
    checkIn: '',
    checkOut: '',
    count: 1,
  });

  const [opened, setOpened] = useState(null);

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const ButtonRef = useRef();

  // const handleCheckIn = e => {
  //   const { name, value } = e.target;
  //   setDataForm({ ...dataForm, [name]: value });
  // };
  const countPlus = () => {
    setDataForm({ ...dataForm, count: dataForm.count + 1 });
  };

  const countMinus = () => {
    if (dataForm.count < 2) {
      setDataForm({ ...dataForm, count: (dataForm.count = 1) });
    }
    setDataForm({ ...dataForm, count: dataForm.count - 1 });
  };

  useEffect(() => {
    const handle = e => {
      if (ButtonRef && !ButtonRef.current.contains(e.target)) {
        setOpenModal(false);
      }
    };
    document.addEventListener('click', handle);

    return () => document.removeEventListener('click', handle);
  });

  const handleArea = city => {
    setDataForm({ ...dataForm, area: city });
  };

  const handleCheckIn = checkIn => {
    setDataForm({ ...dataForm, checkIn: checkIn });
  };

  const handleCheckOut = checkOut => {
    setDataForm({ ...dataForm, checkOut: checkOut });
  };
  return (
    <NavButtonArea ref={ButtonRef}>
      <SearchBar>
        <TravelSelect
          onClick={() => {
            setOpened(opened === 'travel' ? null : 'travel');
          }}
          className={opened === 'travel' ? 'is-active' : 'un-active'}
        >
          여행지 선택 <br />
          {dataForm.area}
        </TravelSelect>
        {opened === 'travel' && (
          <TravelSelectModal handleArea={handleArea} setOpend={setOpened} />
        )}
        <CheckIn
          onClick={() => {
            setOpened(opened === 'checkin' ? null : 'checkin');
          }}
          className={opened === 'checkin' ? 'is-active' : 'un-active'}
        >
          <SpanCheckIn>
            체크인
            <br />
            {getDateFormat(startDate)}
          </SpanCheckIn>
          <SpanCheckOut>
            체크아웃
            <br />
            {endDate && getDateFormat(endDate)}
          </SpanCheckOut>
        </CheckIn>
        {opened === 'checkin' && (
          <CheckInModal
            startDate={startDate}
            handleCheckIn={handleCheckIn}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        )}
        <Personnal
          onClick={() => {
            setOpened(opened === 'personnal' ? null : 'personnal');
          }}
          className={opened === 'personnal' ? 'is-active' : 'un-active'}
        >
          인원선택 : {dataForm.count} 명
        </Personnal>
        {opened === 'personnal' && (
          <PersonnalModal
            count={dataForm.count}
            countPlus={countPlus}
            countMinus={countMinus}
          />
        )}
        <ButtonRadious>
          <ButtonIcon src={Search} />
        </ButtonRadious>
      </SearchBar>
    </NavButtonArea>
  );
};

export default NavButtonClick;

const NavButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: -67px;
  left: -732px;
  background-color: white;
  width: 1920px;
`;
const SearchBar = styled.div`
  display: flex;
  padding: 10px;
  margin-left: -170px;
  width: 900px;
  height: 60px;
  border: 1px solid #d3d3d3;
  border-radius: 20px;
  background-color: #d3d3d3;
  margin-bottom: 10px;
`;

const TravelSelect = styled.div`
  &.is-active {
    background-color: white;
  }
  &.un-active {
    background-color: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  border-radius: 20px;

  &:hover {
    background-color: white;
  }
`;

const CheckIn = styled.div`
  &.is-active {
    background-color: white;
  }
  &.un-active {
    background-color: none;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  border-radius: 20px;

  &:hover {
    background-color: white;
  }
`;

const SpanCheckIn = styled.div`
  display: flex;
  justify-content: center;
`;
const Personnal = styled.div`
  &.is-active {
    background-color: white;
  }
  &.un-active {
    background-color: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border-radius: 20px;
  &:hover {
    background-color: white;
  }
`;

const SpanCheckOut = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonRadious = styled.div`
  position: relative;
  top: 0;
  right: -100px;
  border: 1px solid gray;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: pink;
  border: none;
`;

const ButtonIcon = styled.img`
  right: 10px;
  width: 25px;
  height: 25px;
  margin-top: 7px;
  filter: invert(100%);
`;
