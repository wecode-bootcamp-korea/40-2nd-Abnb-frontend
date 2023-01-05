import React, { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getQueryMap } from 'utils/querystring';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('modal-root'));
};

const MainFilter = ({ setIsOpenModal }) => {
  const { search, pathname } = useLocation();
  const initQueryObj = getQueryMap(search);

  const [selected, setSelected] = useState({
    bathroom: '상관없음',
    bed: '상관없음',
    bedroom: '상관없음',
  });
  const [filterForm, setFilterForm] = useState({
    minprice: '',
    maxprice: '',
    private: false,
    guest: false,
    public: false,
  });

  const navigate = useNavigate();
  const queryMap = {
    min_price: `${filterForm.minprice}`,
    max_price: `${filterForm.maxprice}`,
    private: filterForm.private,
    guest: filterForm.guest,
    public: filterForm.public,
    bathroom: selected.bathroom,
    bedroom: selected.bedroom,
    bed: selected.bed,
  };

  const query = queryMap => {
    const result = Object.keys(queryMap)
      .map(key => (queryMap[key] ? key + `=` + queryMap[key] + '&' : ''))
      .join('');
    return result;
  };

  const changeButton = ({ key, value }) =>
    setSelected({ ...selected, [key]: value });

  const handlePrice = e => {
    const { name, value } = e.target;
    setFilterForm({ ...filterForm, [name]: value });
  };
  const handleLodging = (key, value) => {
    setFilterForm({ ...filterForm, [key]: value });
  };
  const ref = useRef();
  useEffect(() => {
    const handle = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpenModal(false);
      }
    };
    document.addEventListener('mousedown', handle);

    return () => document.removeEventListener('mousedown', handle);
  });

  const handleButton = () => {
    setIsOpenModal(false);
  };

  return (
    <ModalPortal>
      <MainFilterArea ref={ref}>
        <FilterTop>
          필터
          <CloseButton onClick={handleButton}>x</CloseButton>
        </FilterTop>
        <FilterMain>
          <Head>가격 범위</Head>
          <PriceBoxArea>
            <PriceBox>
              최저 가격
              <br />
              ₩&nbsp;
              <Price name="minprice" onChange={handlePrice} />
            </PriceBox>
            <PriceBoxMinus>-</PriceBoxMinus>
            <PriceBox>
              최대 가격
              <br />
              ₩&nbsp;
              <Price name="maxprice" onChange={handlePrice} />
            </PriceBox>
          </PriceBoxArea>
          <CheckBox>
            <Head>숙소 유형</Head>
            {LODGING_CATEGORY.map(items => {
              const { id, category, detail, name } = items;
              return (
                <Check key={id}>
                  <CheckArea
                    type="checkbox"
                    id={name}
                    name={name}
                    onClick={() => {
                      handleLodging(name, !filterForm[name]);
                    }}
                  />
                  <CheckBoxFlex>
                    <CheckCategory htmlFor={name}>{category}</CheckCategory>
                    <CheckExplanation htmlFor={name}>{detail}</CheckExplanation>
                  </CheckBoxFlex>
                </Check>
              );
            })}
          </CheckBox>
          <Room>
            <Head>침실과 침대</Head>
            {Object.entries(ROOMS).map(([key, value]) => (
              <ButtonArea key={key}>
                <Rooms>{key}</Rooms>
                {value.map(v => (
                  <Button1
                    key={v}
                    className={selected[key] === v ? 'active' : ''}
                    onClick={() => {
                      changeButton({ key, value: v });
                    }}
                  >
                    {v}
                  </Button1>
                ))}
              </ButtonArea>
            ))}
          </Room>
        </FilterMain>
        <FilterFooter>
          <FilterButton
            onClick={() => {
              setIsOpenModal(false);
              console.log(queryMap);
              if (pathname === '/search') {
                navigate(`?${query({ ...queryMap, ...initQueryObj })}`);
              } else {
                navigate(`search?${query({ ...queryMap, ...initQueryObj })}`);
              }
            }}
          >
            찾 기
          </FilterButton>
        </FilterFooter>
      </MainFilterArea>
    </ModalPortal>
  );
};

export default MainFilter;

const MainFilterArea = styled.div`
  position: absolute;
  position: fixed;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.4);
  background-color: #ffffff;
  width: 750px;
  height: 500px;
  z-index: 5;
`;

const FilterTop = styled.div`
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid #dfdfdf;
`;

const CloseButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  margin-top: -18px;
  font-size: 20px;
`;

const FilterMain = styled.div`
  overflow: auto;
`;

const Price = styled.input`
  &:focus {
    outline: none;
  }
  border: none;
  padding-top: 5px;
`;

const Head = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 20px 20px;
`;

const PriceBox = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  padding-top: 5px;
  padding-left: 10px;
  font-size: 15px;
  border: 1px solid gray;
  font-weight: lighter;
`;

const PriceBoxArea = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
  border-bottom: 1px solid #dfdfdf;
`;

const PriceBoxMinus = styled.div`
  font-size: 20px;
  margin: 15px;
`;

const CheckBox = styled.div`
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid #dfdfdf;

  padding-bottom: 25px;
`;

const Check = styled.div`
  display: flex;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 20px;
  width: 400px;
  height: 50px;
`;

const CheckCategory = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CheckExplanation = styled.label`
  font-size: 13px;
  font-weight: lighter;
`;

const CheckArea = styled.input`
  width: 20px;
`;

const CheckBoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
`;

const Room = styled.div`
  padding-bottom: 25px;
`;

const FilterFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #dfdfdf;
  height: 100px;
`;

const FilterButton = styled.button`
  background: black;
  margin-right: 10px;
  color: white;
  border: #dfdfdf;
  border-radius: 5px;
  height: 40px;
  width: 130px;
  cursor: pointer;
`;

const ButtonArea = styled.div``;

const Rooms = styled.div`
  font-weight: lighter;
  padding: 20px 20px;
`;

const Button1 = styled.button`
  &.active {
    background-color: black;
    color: white;
  }
  height: 50px;
  border: 1px solid #dfdfdf;
  background-color: white;
  border-radius: 20px;
  width: 65px;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const LODGING_CATEGORY = [
  {
    id: 1,
    category: '집 전체',
    detail: '단독으로 사용하는 공간 전체',
    name: 'private',
  },
  {
    id: 2,
    category: '개인실',
    detail: '집 또는 호텔의 개인실과 일부 공간',
    name: 'guest',
  },
  {
    id: 3,
    category: '다인실',
    detail: '다른 사람들과 함께 사용하는 다인실 및 공용 공간',
    name: 'public',
  },
];
const ROOMS = {
  bed: ['상관없음', 1, 2, 3, 4, 5, 6, 7, '8+'],
  bedroom: ['상관없음', 1, 2, 3, 4, 5, 6, 7, '8+'],
  bathroom: ['상관없음', 1, 2, 3, 4, 5, 6, 7, '8+'],
};
