import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import MainSelect from 'pages/Main/MainSelect';

const ProductList = () => {
  const location = useLocation();
  const [accommodationList, setAccommodationList] = useState([]);
  const querystring = location.search.includes('?')
    ? location.search.substring(1)
    : location.search;

  useEffect(() => {
    fetch(`http://10.58.52.227:8000/products?${querystring}`)
      .then(res => res.json())
      .then(data => setAccommodationList(data));
  }, [querystring]);

  return (
    <>
      <MainSelect />
      <ProductListContainer>
        <ProductListBox>
          {accommodationList.map(data => (
            <Card key={data.id} {...data} />
          ))}
        </ProductListBox>
      </ProductListContainer>
    </>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  width: fit-content;
  margin: 180px auto;
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
