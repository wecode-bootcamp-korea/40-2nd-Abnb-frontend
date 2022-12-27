import React from 'react';
import styled from 'styled-components';

const TravelSelectModal = ({ handleArea, setOpend }) => {
  const closeModal = () => {
    setOpend('');
  };
  return (
    <TravelSelectModalArea>
      <Header>여행지 선택</Header>
      <ItemsFlex>
        {CITY_CHOSE.map(_city => {
          const { id, url, city } = _city;
          return (
            <Items key={id}>
              <Img src={url} onClick={() => handleArea(city)} />
              <Name>{city}</Name>
            </Items>
          );
        })}
      </ItemsFlex>
      <Close onClick={closeModal}>닫 기</Close>
    </TravelSelectModalArea>
  );
};

export default TravelSelectModal;

const TravelSelectModalArea = styled.div`
  border-radius: 20px;
  border: #d3d3d3;
  background-color: white;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 80px;
  cursor: default;
`;
const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 20px 20px;
`;

const ItemsFlex = styled.div`
  display: grid;
  grid-template-columns: 220px 130px;
`;
const Items = styled.div`
  margin-left: 10px;
`;
const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 15px;
`;

const Close = styled.div`
  cursor: pointer;
  margin-top: 30px;
`;

const CITY_CHOSE = [
  { id: 1, city: '서울', url: '/images/Nav/seoul.jpg' },
  { id: 2, city: '경기도', url: '/images/Nav/gyeonggi.jpg' },
  { id: 3, city: '인천', url: '/images/Nav/incheon.jpg' },
];
