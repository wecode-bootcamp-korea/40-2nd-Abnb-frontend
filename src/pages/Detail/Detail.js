import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Calender from './Calender';
import CalenderModal from './CalenderModal';
import Modal from './Modal';
import { getDateFormat } from '../../utils/format';
import { useParams, useNavigate } from 'react-router-dom';
import { addDays, subDays } from 'date-fns';
const { kakao } = window;

const Detail = () => {
  const listId = useParams();
  const date = new Date();

  const mapRef = useRef(null);

  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(date);

  const [isDefult, setIsDefult] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [detailData, setDetailData] = useState({});

  const navigate = useNavigate();

  const realEnd = endDate < startDate ? startDate : endDate;
  const getDay = (realEnd - startDate) / (1000 * 60 * 60 * 24) + 1;
  const totalPrice = detailData.price * getDay;
  const imageSrc =
    'https://img.pikbest.com/58pic/27/61/87/47U58PICkiscVepeaMwW0_PIC2018.png!w700wp';
  const euroPrice = totalPrice.toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });

  const deleteDate = () => {
    setStartDate(startDate);
    setEndDate(startDate);
    setIsDefult(true);
  };

  const onClickDecreaseBtn = () => setCount(prev => prev - 1);
  const onClickIncreaseBtn = () => setCount(prev => prev + 1);

  // TODO:`http://10.58.52.227:8000/products/${listId.id}`

  useEffect(() => {
    fetch('/data/Detail.json')
      .then(response => response.json())
      .then(result => {
        setDetailData(result[0]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(37.47850303, 126.877853),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(37.47850303, 126.877853);
    const imageSize = new kakao.maps.Size(44, 40);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    marker.setMap(map);
  });

  if (loading) return;

  //TODO: 백이랑 통신
  // const onClick = () => {
  //   fetch('http://10.58.52.227:8000/products/booking', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: localStorage.getItem('token'),
  //     },
  //     body: JSON.stringify({
  //       productId: listId.id,
  //       guestNumber: count,
  //       checkIn: getDateFormat(startDate),
  //       checkOut: endDate && getDateFormat(endDate),
  //       totalPrice: totalPrice,
  //     }),
  //   });
  // };

  const done = () => {
    alert('완료');
    navigate('/');
  };

  const onChange = dates => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
    setIsDefult(false);
  };

  return (
    <div>
      <FlexBox>
        <TitleBox>{detailData.title}</TitleBox>

        <IconBox>
          {detailData.product4}
          <ShareText>{detailData.product5}</ShareText>
        </IconBox>

        <PictureBox key={detailData.id}>
          <LeftPicture
            key={detailData.id}
            src={detailData.image_url[0]}
            alt="img"
          />
          <RightBox>
            <MiniBottomBox>
              <RightBoxMini src={detailData.image_url[1]} alt="img" />
              <RightBoxRight src={detailData.image_url[2]} alt="img" />
            </MiniBottomBox>
            <MiniTopBox>
              <BottomRightBox src={detailData.image_url[3]} alt="img" />
              <BottomDownBox src={detailData.image_url[4]} alt="img" />
            </MiniTopBox>
          </RightBox>
        </PictureBox>

        <CalenderBox>
          <DateBox>
            <DateHostBox>
              {detailData.name} 님의 저택 전체
              <HostPeople>
                최대인원 {detailData.maximum_guest}명 . 침실{detailData.bedroom}
                . 침대
                {detailData.bed} . 욕실{detailData.bathroom}
              </HostPeople>
            </DateHostBox>
            <HostDetailBox>
              <OfficeBox>
                업무 전용 공간
                <WifiText>
                  와이파이를 갖추고 업무에 적합한 공용 공간입니다.
                </WifiText>
              </OfficeBox>
              <SelfBox>
                셀프 체크인
                <KeyText>열쇠 보관함을 이용해 체크인하세요</KeyText>
              </SelfBox>
              <LocationBox>
                훌륭한 숙소 위치
                <SinceText>
                  최근 숙박한 게스트 중 95%가 위치에 별점 5점을 준 숙소입니다.
                </SinceText>
              </LocationBox>
            </HostDetailBox>
            <AirCoverBox>
              <p>
                <Span>에어</Span>커버
              </p>
              <AirDetailText>
                모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지
                않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호
                프로그램이 포함됩니다.
              </AirDetailText>
              <button
                className="airButton"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                더 알아보기
              </button>
              {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
            </AirCoverBox>
            <LineTextBox>{detailData.description}</LineTextBox>

            <Calender
              reservations={[]}
              startDate={startDate}
              onChange={onChange}
              endDate={endDate}
              range={{
                start: subDays(new Date(), 5),
                end: addDays(new Date(), 5),
              }}
            />
            <DelateButton onClick={deleteDate}>날짜 지우기</DelateButton>
          </DateBox>
          <PayBox>
            <PaydetailBox>
              <CheckBox>
                <CheckInBox>
                  {isDefult ? (
                    <NonePrice>
                      요금을 확인하려면 날짜를
                      <br />
                      입력하세요
                    </NonePrice>
                  ) : (
                    <Price>
                      ₩{Math.floor(detailData.price).toLocaleString()}/박
                    </Price>
                  )}
                </CheckInBox>

                <CheckOutBox
                  onClick={() => {
                    setIsModal(true);
                  }}
                >
                  {isDefult && <DateSpan>날짜를 추가해주세요 </DateSpan>}
                  {!isDefult && (
                    <FormIn>
                      <CheckIn name="CheckIn">
                        <div>체크인</div>
                        <div>{getDateFormat(startDate)}</div>
                      </CheckIn>
                      <CheckOut name="CheckOut">
                        <div>체크아웃</div>
                        <div>{endDate && getDateFormat(endDate)}</div>
                      </CheckOut>
                    </FormIn>
                  )}
                </CheckOutBox>
                {isModal && (
                  <CalenderModal
                    setIsModal={setIsModal}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={onChange}
                    reservations={[]}
                    name="name"
                    range={[
                      {
                        start: subDays(new Date(), 5),
                        end: addDays(new Date(), 5),
                      },
                    ]}
                  />
                )}
                <AdultButton>
                  <ButtnPls onClick={onClickDecreaseBtn}>-</ButtnPls>
                  성인 {count}
                  <ButtonMin onClick={onClickIncreaseBtn}>+</ButtonMin>
                </AdultButton>
                <Reservation
                // onClick={() => {
                //   onClick();
                //   done();
                // }}
                >
                  예약하기
                </Reservation>
              </CheckBox>
              <PriceBox>
                {!isDefult && (
                  <TotalPrice>
                    <TotalText>총 합계</TotalText>
                    {euroPrice}
                  </TotalPrice>
                )}
              </PriceBox>
            </PaydetailBox>
            <PoliceText>숙소 신고하기</PoliceText>
          </PayBox>
        </CalenderBox>
      </FlexBox>
      <MapBox>
        <SpanHost>호스팅 지역</SpanHost>
        <LocactionMapBox ref={mapRef} />
        <MapDetail>{detailData.address}</MapDetail>
      </MapBox>
    </div>
  );
};

export default Detail;

const FlexBox = styled.div`
  width: 99%;
  padding: 130px 130px 30px 130px;
`;

const TitleBox = styled.div`
  width: 100%;
  font-size: 30px;
  padding-left: 20px;
  padding-top: 5px;
`;

const Span = styled.span`
  color: red;
`;

const IconBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const ShareText = styled.div`
  font-size: 15px;
`;

const PictureBox = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
`;

const LeftPicture = styled.img`
  width: 70%;
  height: 98%;
  padding-right: 15px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const RightBox = styled.div`
  width: 40%;
`;

const MiniBottomBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;

const RightBoxMini = styled.img`
  width: 48%;
  height: 95%;
`;

const RightBoxRight = styled.img`
  width: 48%;
  height: 95%;
  border-top-right-radius: 20px;
`;

const MiniTopBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;

const BottomRightBox = styled.img`
  width: 48%;
  height: 95%;
`;

const BottomDownBox = styled.img`
  width: 48%;
  height: 95%;
  border-bottom-right-radius: 20px;
`;

const CalenderBox = styled.div`
  width: 100%;
  padding: 30px 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #b0b0b0;
  padding-top: 10px;
`;

const DelateButton = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  display: flex;
  justify-content: end;
`;

const DateBox = styled.div`
  width: 70%;
`;

const DateHostBox = styled.div`
  width: 100%;
  height: 110px;
  line-height: 50px;
  padding-left: 5px;
  border-bottom: 1px solid #b0b0b0;
  padding-top: 10px;
  color: inherit;
  font-size: 30px;
  font-weight: inherit;
`;

const HostPeople = styled.div`
  font-size: 20px;
`;

const HostDetailBox = styled.div`
  width: 100%;
  height: 250px;
  padding-top: 5px;
`;

const OfficeBox = styled.div`
  width: 100%;
  height: 30%;
  padding-left: 5px;
  font-size: 16px;
  line-height: 30px;
  padding-top: 5px;
`;

const WifiText = styled.div`
  font-size: 14px;
  color: #717171;
`;

const SelfBox = styled.div`
  width: 100%;
  height: 30%;
  font-size: 16px;
  padding-left: 5px;
  line-height: 30px;
`;

const KeyText = styled.div`
  font-size: 14px;
  color: #717171;
`;

const LocationBox = styled.div`
  width: 100%;
  height: 30%;
  font-size: 16px;
  padding-left: 5px;
  line-height: 30px;
  border-bottom: 1px solid #b0b0b0;
`;

const SinceText = styled.div`
  font-size: 14px;
  color: #717171;
`;

const AirCoverBox = styled.div`
  width: 100%;
  padding-left: 5px;
  font-size: 30px;
  line-height: 50px;
  border-bottom: 1px solid #b0b0b0;
  font-weight: bold;
  margin-bottom: 10px;

  .airButton {
    border: none;
    outline: none;
    background-color: white;
    text-decoration: underline;
    width: 100px;
    height: 30px;
    cursor: pointer;
    text-align: start;
  }
`;

const AirDetailText = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #222222;
`;

const LineTextBox = styled.div`
  width: 100%;
  font-size: 20px;
  padding-left: 5px;
  line-height: 60px;
  margin-top: 10px;
  border-bottom: 1px solid #b0b0b0;
`;

const MapBox = styled.div`
  width: 89%;
  height: 700px;
  margin-left: 130px;
  flex-direction: column;
`;

const MapDetail = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;

const SpanHost = styled.div`
  font-size: 22px;
  color: #222222;
  margin-bottom: 20px;
`;

const LocactionMapBox = styled.div`
  width: 93%;
  height: 500px;
  display: flex;
  justify-content: center;
`;

const PayBox = styled.div`
  width: 25%;
  height: 400px;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  position: sticky;
  top: 99px;
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;

const CheckBox = styled.div`
  width: 100%;
  flex-direction: column;
  padding-top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const CheckInBox = styled.div`
  width: 90%;
  height: 3vw;
  font-size: 20px;
  margin-bottom: 10px;
`;

const CheckIn = styled.div`
  width: 50%;
  height: 4vw;
  border-right: 1px solid black;
  border-top-left-radius: 20px;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const CheckOut = styled.div`
  width: 50%;
  height: 4vw;
  border-top-right-radius: 20px;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;

  &:focus {
    outline: none;
  }
`;

const FormIn = styled.div`
  width: 100%;
  height: 4vw;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const NonePrice = styled.div`
  font-size: 20px;
`;

const Price = styled.div`
  font-size: 20px;
`;

const CheckOutBox = styled.div`
  width: 100%;
  height: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #b0b0b0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const DateSpan = styled.div`
  font-size: 20px;
  font-weight: 10px;
`;

const AdultButton = styled.div`
  width: 100%;
  height: 4vw;
  border: 1px solid #b0b0b0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-weight: bold;
`;

const Reservation = styled.div`
  width: 100%;
  border-radius: 10px;
  color: white;
  text-align: center;
  margin-top: 15px;
  line-height: 50px;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
`;

const PriceBox = styled.div`
  width: 100%;
  margin-top: 60px;
  border-top: 1px solid #b0b0b0;
`;

const TotalPrice = styled.div`
  font-size: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

const TotalText = styled.div`
  font-size: 16px;
  color: rgb(34, 34, 34);
`;

const ButtnPls = styled.div`
  font-size: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonMin = styled.div`
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const PaydetailBox = styled.div`
  width: 100%;
  height: 350px;
`;

const PoliceText = styled.div`
  text-decoration: underline;
  font-size: 14px;
  text-align: center;
  margin-top: 50px;
  color: #717171;
  cursor: pointer;
`;
