import Card from 'components/Card/Card';
import React, { useEffect, useState } from 'react';

const Test = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('/data/MOCK.json')
      .then(res => res.json())
      .then(data => setItemList(data));
  }, []);

  return (
    <>
      <h1>테스트 페이지 입니다~</h1>
      {itemList.map(data => (
        <Card key={data.id} {...data} />
      ))}
    </>
  );
};

export default Test;
