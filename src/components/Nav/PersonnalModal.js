import React from 'react';
import styled from 'styled-components';

const PersonnalModal = ({ adult, countPlus, countMinus }) => {
  const PlusCount = () => {
    countPlus();
  };

  const MinusCount = () => {
    countMinus();
  };
  return (
    <PersonnalModalArea>
      <Header>인원선택</Header>
      <SelectBar>
        <MinusButton onClick={MinusCount}> - </MinusButton>
        <Select>{adult}</Select>
        <PlusButton onClick={PlusCount}> + </PlusButton>
      </SelectBar>
    </PersonnalModalArea>
  );
};

export default PersonnalModal;

const PersonnalModalArea = styled.div`
  position: absolute;
  top: 80px;
  background-color: white;
  width: 300px;
  height: 70px;
  border-radius: 20px;
  left: 1080px;
`;

const Header = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding-top: 10px;
`;

const SelectBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Select = styled.div`
  font-size: 20px;
`;
const MinusButton = styled.div`
  font-size: 20px;
  margin-right: 20px;
`;

const PlusButton = styled.div`
  font-size: 20px;
  margin-left: 20px;
`;
