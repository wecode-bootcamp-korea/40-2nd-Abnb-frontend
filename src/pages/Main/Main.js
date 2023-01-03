import Card from 'components/Card/Card';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainSelect from './MainSelect';
import MainList from './MainList';
import Skeleton from './Skeleton';

const Main = () => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const observerTarget = useRef(null);
  const skeletonArray = useMemo(() => Array(8).fill(''), []);
  const location = useLocation();

  const getFetch = () => {
    fetch(`http://10.58.52.227:8000/products?${location.search}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) return setIsEnd(true);
        setItemList(prev => [...prev, ...data]);
        setIsLoading(false);
      });
  };

  const onIntersection = ([targetNode], observer) => {
    if (targetNode.isIntersecting && !isLoading) {
      setPage(prev => prev + 1);
      observer.unobserve(targetNode.target);
      setIsLoading(true);
      getFetch();
      observer.observe(targetNode.target);
    }
  };

  useEffect(() => {
    let observer;
    if (observerTarget.current) {
      observer = new IntersectionObserver(onIntersection);
      observer.observe(observerTarget.current);
    }
    return () => {
      observer.disconnect();
    };
  });

  return (
    <>
      <MainSelect />
      <ProductListContainer>
        <ProductListBox>
          {itemList.map(data => (
            <Card key={data.id} {...data} itemList={itemList} />
          ))}
          {isLoading &&
            !isEnd &&
            skeletonArray.map(index => <Skeleton key={index} />)}
        </ProductListBox>
      </ProductListContainer>
      <div ref={observerTarget} />
    </>
  );
};

export default Main;

const ProductListContainer = styled.div`
  width: fit-content;
  margin: 120px auto;
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
