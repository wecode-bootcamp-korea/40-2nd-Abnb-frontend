import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import Search from '../../assets/nav/돋보기.png';
import TravelSelectModal from './TravelSelectModal';
import CheckInModal from './CheckInModal';
import PersonnalModal from './PersonnalModal';
import { getDateFormat } from '../../utils/format';

const NavButtonClick = ({ closeModal }) => {
  const [dataForm, setDataForm] = useState({
    area: '',
    count: 1,
  });

  const [opened, setOpened] = useState(null);

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const ButtonRef = useRef();

  const checkIn = getDateFormat(startDate);

  const checkOut = endDate && getDateFormat(endDate);

  const navigate = useNavigate();

  const countPlus = () => {
    setDataForm({ ...dataForm, count: dataForm.count + 1 });
  };

  const countMinus = () => {
    if (dataForm.count < 2) {
      setDataForm({ ...dataForm, count: (dataForm.count = 1) });
    }
    setDataForm({ ...dataForm, count: dataForm.count - 1 });
  };

  const handleArea = city => {
    setDataForm({ ...dataForm, area: city });
  };
  const queryString = {
    area: dataForm.area,
    count: dataForm.count,
    checkIn: checkIn,
    checkOut: checkOut,
  };

  const query = queryString => {
    const result = Object.keys(queryString)
      .map(key => (queryString[key] ? key + `=` + queryString[key] + '&' : ''))
      .join('');
    return result;
  };

  useEffect(() => {
    const handle = e => {
      if (ButtonRef && !ButtonRef.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener('click', handle);

    return () => document.removeEventListener('click', handle);
  });

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
            {checkIn}
          </SpanCheckIn>
          <SpanCheckOut>
            체크아웃
            <br />
            {checkOut}
          </SpanCheckOut>
        </CheckIn>
        {opened === 'checkin' && (
          <CheckInModal
            startDate={startDate}
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
        <ButtonRadious
          onClick={e => {
            e.stopPropagation();
            closeModal();
            navigate(`/${query(queryString)}`);
          }}
        >
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
  top: -5px;
  right: -60px;
  border: 1px solid gray;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-color: pink;
  border: none;
  background-color: #ff385c;
`;

const ButtonIcon = styled.img`
  right: 10px;
  width: 35px;
  height: 35px;
  margin-top: 7px;
  filter: invert(100%);
`;
