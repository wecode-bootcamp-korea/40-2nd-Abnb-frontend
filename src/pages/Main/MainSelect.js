import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MainFilter from './MainFilter';
import Filter from '../../assets/main/filter.png';
import styled from 'styled-components';

const MainSelect = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <MainSelectArea>
      <SelectItems
        onClick={() => {
          navigate('/');
        }}
      >
        <SelectIcon src="/images/MainPage/all.png" />
        <SelectName>전체</SelectName>
      </SelectItems>
      {MAINITEMS.map(items => {
        const { id, name, url, params } = items;
        return (
          <SelectItems
            key={id}
            onClick={() => {
              if (searchParams.get('adult')) {
                searchParams.set('category', params);
                setSearchParams(searchParams);
              } else {
                navigate(`/search?category=${params}`);
              }
            }}
          >
            <SelectIcon src={url} />
            <SelectName>{name}</SelectName>
          </SelectItems>
        );
      })}
      <FilterButton
        onClick={e => {
          e.stopPropagation();
          setIsOpenModal(true);
        }}
      >
        <FilterIcon src={Filter} alt="필터" />
        필터
      </FilterButton>
      {isOpenModal && <MainFilter setIsOpenModal={setIsOpenModal} />}
    </MainSelectArea>
  );
};

export default MainSelect;

const MainSelectArea = styled.div`
  padding: 0 50px;
  margin-top: -90px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  z-index: 3;
  background-color: white;
`;

const SelectItems = styled.div`
  &:hover {
    background-color: #d3d3d3;
  }
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  margin: 10px;
`;
const SelectIcon = styled.img`
  margin: auto;
  display: block;
  width: 25px;
  height: 25px;
`;

const SelectName = styled.div`
  padding-top: 5px;
  font-size: 14px;
  text-align: center;
  font-weight: lighter;
`;

const FilterButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  cursor: pointer;
  padding: 7px 0;
  width: 100px;
  height: 40px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  background-color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 10px;
`;

const FilterIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const MAINITEMS = [
  {
    id: 2,
    name: '한옥',
    url: '/images/MainPage/한옥.png',
    params: 'hanok',
  },
  {
    id: 3,
    name: '캠핑',
    url: '/images/MainPage/캠핑.png',
    params: 'camping',
  },
  {
    id: 4,
    name: '해변',
    url: '/images/MainPage/해변.png',
    params: 'sea',
  },
  {
    id: 5,
    name: '사막',
    url: '/images/MainPage/사막.png',
  },
  {
    id: 6,
    name: '북극',
    url: '/images/MainPage/북극.png',
  },
  {
    id: 7,
    name: '동굴',
    url: '/images/MainPage/동굴.png',
  },
  {
    id: 8,
    name: '스키를 타고 출입 가능',
    url: '/images/MainPage/스키.png',
  },
  {
    id: 9,
    name: '헛간',
    url: '/images/MainPage/헛간.png',
  },
  {
    id: 10,
    name: '섬',
    url: '/images/MainPage/섬.png',
  },
  {
    id: 11,
    name: '서핑',
    url: '/images/MainPage/서핑.png',
  },
];
