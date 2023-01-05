import React from 'react';
import styled from 'styled-components';
import { CATEGORY_DATA } from '../HostData/hostingData';

const HostCategory = ({ formData, onSubmit }) => {
  const { category } = formData;

  return (
    <CategoryDiv>
      <CategoryContainer>
        <CategoryBox>
          <TitleDiv>
            <Title>다음 중 숙소를 가장 잘 설명하는 것은 무엇인가요?</Title>
          </TitleDiv>
        </CategoryBox>
        <CategoryGroup>
          <Groups>
            {CATEGORY_DATA.map(categories => {
              return (
                <Button
                  category={category}
                  current={categories.title}
                  onClick={() => {
                    onSubmit({ category: categories.title });
                  }}
                  key={categories.id}
                >
                  <ButtonImg src={categories.img} alt="hanok" />
                  <CategoryName>{categories.title}</CategoryName>
                </Button>
              );
            })}
          </Groups>
        </CategoryGroup>
      </CategoryContainer>
    </CategoryDiv>
  );
};

export default HostCategory;

const CategoryDiv = styled.div`
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  animation: ${({ theme }) => theme.fadeIn} 1s linear alternate;
`;

const CategoryBox = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 640px;
  padding-top: 0px;
`;

const TitleDiv = styled.div`
  margin-bottom: 32px;
  background-color: transparent;
`;

const Title = styled.h1`
  margin-bottom: 0;
  font-size: 32px;
`;

const CategoryGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 640px;
`;

const Groups = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #dddddd;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 16px;
  background-color: ${({ current, category }) =>
    current === category ? '#f3f3f3' : '#ffffff'};
  border: ${({ current, category }) =>
    current === category ? '1.5px solid #000000' : '1px solid #dddddd'};
`;

const ButtonImg = styled.img`
  width: 37px;
  height: 37px;
  justify-content: center;
  margin-bottom: 3px;
`;

const CategoryName = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;
