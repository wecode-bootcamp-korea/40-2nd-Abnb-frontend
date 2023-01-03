import React from 'react';
import styled from 'styled-components';

const Skeleton = () => {
  return (
    <SkeletonCard>
      <SkeletonImgBox />
      <SkeletonTitleBox />
      <SkeletonAddressBox />
      <SkeletonPriceBox />
    </SkeletonCard>
  );
};

export default Skeleton;

const SkeletonCard = styled.div``;
const SkeletonImgBox = styled.div`
  width: 310px;
  height: 310px;
  background-color: #ebebeb;
  border-radius: 10px;
`;
const SkeletonTitleBox = styled.div`
  width: 200px;
  height: 18px;
  margin-top: 8px;
  background-color: #ebebeb;
  border-radius: 5px;
`;
const SkeletonAddressBox = styled.div`
  width: 130px;
  height: 18px;
  margin-top: 5px;
  background-color: #ebebeb;
  border-radius: 5px;
`;
const SkeletonPriceBox = styled.div`
  width: 150px;
  height: 20px;
  margin-top: 8px;
  background-color: #ebebeb;
  border-radius: 5px;
`;
