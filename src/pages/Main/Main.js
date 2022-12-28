import Card from 'components/Card/Card';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MainSelect from './MainSelect';
import MainList from './MainList';

const Main = () => {
  const [roomList, setRoomList] = useState([]);
  const observerTarget = useRef(null);
  //TODO : Back API 구현 후 추가 구현 예정
  useEffect(() => {
    const observer = new IntersectionObserver(([targetnNode]) => {
      if (targetnNode.isIntersecting) {
        fetch('/data/MOCK.json')
          .then(res => res.json())
          .then(data => setRoomList(prev => [...prev, ...data]));
      }
    });
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <MainSelect />
      <ProductListContainer>
        <ProductListBox>
          {roomList.map(data => (
            <Card key={data.id} {...data} />
          ))}
        </ProductListBox>
      </ProductListContainer>
      <div ref={observerTarget} />
    </>
  );
};

export default Main;

const ProductListContainer = styled.div`
  width: fit-content;
  margin: 20px auto;
`;

const ProductListBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  width: 100%;
  grid-gap: 25px;

  @media (min-width: 670px) and (max-width: 1070px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1070px) and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
