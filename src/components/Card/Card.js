import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { posCenterY } from 'utils/variables';

const Card = props => {
  const { title, price, date, address, images, ...other } = props;

  const [currentIdx, setCurrentIdx] = useState(0);
  const TOTAL_SLIDE = images.length - 1;
  const REACH_MAX = currentIdx !== 0;
  const REACH_MIN = currentIdx < TOTAL_SLIDE;

  const nextImage = () => {
    if (currentIdx >= TOTAL_SLIDE) {
      return;
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentIdx === 0) {
      return;
    } else {
      setCurrentIdx(prev => prev - 1);
    }
  };

  return (
    <div>
      <LinkBox to="#">
        <CardBox>
          <CardCarouselContainer>
            <CardCarouselBox>
              <CarouselBox currentIdx={currentIdx}>
                {images.map(({ id, image_url }) => (
                  <CardImageBox key={id}>
                    <CardImage alt="숙소 이미지" src={image_url} />
                  </CardImageBox>
                ))}
              </CarouselBox>
            </CardCarouselBox>
            {REACH_MAX && (
              <CarouselPrevButton onClick={prevImage}>〈</CarouselPrevButton>
            )}
            {REACH_MIN && (
              <CarouselNextButton onClick={nextImage}>〉</CarouselNextButton>
            )}
          </CardCarouselContainer>
          <CardInfoBox>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{address}</CardDescription>
            <CardPrice>
              <span>₩{[Math.floor(price)].toLocaleString()}</span>
              <CardPerDay> /박</CardPerDay>
            </CardPrice>
          </CardInfoBox>
        </CardBox>
      </LinkBox>
    </div>
  );
};
export default Card;

const LinkBox = styled(Link)`
  text-decoration: none;
  color: black;
`;

const CardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardTitle = styled.div`
  font-weight: 500;
  font-size: 15px;
  padding: 10px 0 5px 0;
`;

const CardDescription = styled.div`
  font-size: 15px;
  color: #717171;
  margin: 3px 0 0 0;
`;

const CardPrice = styled.div`
  font-weight: bold;
  padding-top: 10px;
`;
const CardPerDay = styled.span`
  font-weight: 400;
`;

const CardCarouselContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const CarouselPrevButton = styled.button`
  box-shadow: 0 0 20px 0 gray;
  z-index: 1;
  width: 30px;
  height: 30px;
  border: none;
  background-color: #ffffff;
  border-radius: 50%;
  left: 10px;
  opacity: 0;
  ${posCenterY('absolute')};
  ${CardCarouselContainer}:hover & {
    transition: all ease 0.5s 0s;
    opacity: 0.9;
  }
`;

const CarouselNextButton = styled.button`
  box-shadow: 0 0 20px 0 gray;
  z-index: 1;
  width: 30px;
  height: 30px;
  border: none;
  background-color: #ffffff;
  border-radius: 50%;
  right: 10px;
  opacity: 0;
  ${posCenterY('absolute')};
  ${CardCarouselContainer}:hover & {
    transition: all ease 0.5s 0s;
    opacity: 0.9;
  }
`;

const CardCarouselBox = styled.div`
  width: 310px;
  height: 310px;
  overflow: hidden;
  border-radius: 10px;
`;

const CarouselBox = styled.div`
  display: flex;
  transition: all 0.5s ease-in-out;
  transform: ${props => `translate(-${props.currentIdx * 100}%) `};
`;

const CardBox = styled.div`
  width: 310px;
  height: 395px;
`;
const CardImageBox = styled.div`
  width: 100%;
  height: 310px;
`;

const CardImage = styled.img`
  width: 310px;
  height: 395px;
  object-fit: cover;
`;
