import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import styled from 'styled-components';

const MainList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/data/MOCK.json')
      .then(response => response.json())
      .then(result => setData(result));
  }, []);

  return (
    <MainListArea>
      {data.map(data => {
        return <Card key={data.id} {...data} />;
      })}
    </MainListArea>
  );
};

export default MainList;

const MainListArea = styled.div``;
