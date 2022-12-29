import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from 'components/Card/Card';

const ProductList = () => {
  const [accommodationList, setAccommodationList] = useState([]);

  useEffect(() => {
    fetch('/data/MOCK.json')
      .then(res => res.json())
      .then(data => setAccommodationList(data));
  }, []);

  return (
    <ProductListContainer>
      <ProductListBox>
        {accommodationList.map(data => (
          <Card key={data.id} {...data} />
        ))}
      </ProductListBox>
    </ProductListContainer>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  width: fit-content;
  margin: 20px auto;
`;
const ProductListBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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
