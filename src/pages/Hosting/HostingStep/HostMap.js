import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const HostMap = ({ onSubmit }) => {
  const { kakao } = window;
  const [inputAddr, setInputAddr] = useState('');
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  const addrCheck = e => {
    setInputAddr(e.target.value);
  };

  const enterSave = ({ code }) => {
    if (code !== 'Enter') return;
    addressSave();
  };

  const addressSave = () => {
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(inputAddr, ([data], status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];
        markers.push({
          position: {
            lat: data.y,
            lng: data.x,
          },
          content: data.place_name,
          address: data.address_name,
        });
        bounds.extend(new kakao.maps.LatLng(data.y, data.x));
        setMarkers(markers);
        map.setBounds(bounds);
      }

      onSubmit({
        address: [data.address_name, data.place_name].join(' '),
        lat: data.y,
        lng: data.x,
      });
    });
  };

  return (
    <MapDiv>
      <HostMapContainer>
        <MapTitleDiv>
          <MapTitle>숙소 위치는 어디인가요?</MapTitle>
          <MessageBox>
            <MapMessage>
              주소는 게스트의 예약이 확정된 이후에 공개됩니다.
            </MapMessage>
          </MessageBox>
        </MapTitleDiv>
        <MapBox>
          <Map
            center={{ lat: 37.5064, lng: 127.054 }}
            style={{
              position: 'relative',
              width: '100%',
              height: '380px',
              borderRadius: '10px',
            }}
            level={3}
            onCreate={setMap}
          >
            <MapSearchDiv>
              <MapMark src="./images/Host/marker.png" alt="mark" />
              <input
                placeholder="주소를 입력하세요."
                onChange={addrCheck}
                onKeyDown={enterSave}
              />
            </MapSearchDiv>
            <MapMarker
              position={
                markers.length !== 0
                  ? {
                      lat: markers[0].position.lat,
                      lng: markers[0].position.lng,
                    }
                  : { lat: 37.5064, lng: 127.054 }
              }
            />
          </Map>
        </MapBox>
        {markers.length !== 0 && (
          <MapAddressBox>
            <MapAddress>이 주소가 정확한가요?</MapAddress>
            <AddressName>
              {markers[0].address}&nbsp;
              {markers[0].content}
            </AddressName>
          </MapAddressBox>
        )}
      </HostMapContainer>
    </MapDiv>
  );
};

export default HostMap;

const MapDiv = styled.div`
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
  animation: ${({ theme }) => theme.fadeIn} 1s linear alternate;
`;

const HostMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 630px;
  margin: auto;
`;

const MapTitleDiv = styled.div`
  margin-bottom: 22px;
  background-color: transparent;
`;

const MapTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 32px;
`;

const MessageBox = styled.div`
  width: 580px;
  margin-bottom: 32px;
`;

const MapMessage = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: #717171;
`;

const MapBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const MapAddressBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const MapAddress = styled.h2`
  margin-top: 24px;
  font-size: 26px;
`;

const AddressName = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

const MapSearchDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 80%;
  height: 60px;
  top: 32px;
  left: 10%;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  z-index: 5;

  input {
    border: none;
    width: 100%;
    height: 28px;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
`;

const MapMark = styled.img`
  width: 26px;
  height: 26px;
  margin-left: 25px;
`;
