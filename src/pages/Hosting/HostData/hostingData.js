import hanokImg from '../../../assets/images/hanok.png';
import seaImg from '../../../assets/images/sea.png';
import campImg from '../../../assets/images/camp.png';
import skiImg from '../../../assets/images/ski.png';
import surfImg from '../../../assets/images/surf.png';
import caveImg from '../../../assets/images/cave.png';
import islandImg from '../../../assets/images/island.png';
import desertImg from '../../../assets/images/desert.png';
import iceImg from '../../../assets/images/ice.png';
import barnImg from '../../../assets/images/barn.png';
import boardImg from '../../../assets/images/board.png';
import calendarImg from '../../../assets/images/calendar.png';
import pencilImg from '../../../assets/images/pencil.png';

export const CATEGORY_DATA = [
  { id: 1, title: '한옥', img: hanokImg },
  { id: 2, title: '인천 앞바다', img: seaImg },
  { id: 3, title: '캠핑장', img: campImg },
  { id: 4, title: '스키를 타고 출입 가능', img: skiImg },
  { id: 5, title: '서핑', img: surfImg },
  { id: 6, title: '동굴', img: caveImg },
  { id: 7, title: '섬', img: islandImg },
  { id: 8, title: '사막', img: desertImg },
  { id: 9, title: '북극', img: iceImg },
  { id: 10, title: '헛간', img: barnImg },
];

export const TYPE_DATA = [
  {
    id: 1,
    title: '공간 전체',
    message: '게스트가 숙소 전체를 단독으로 사용합니다.',
    type: 'private',
    image: './images/Host/home.png',
  },
  {
    id: 2,
    title: '개인실',
    message:
      '게스트는 개인실에서 숙박하지만, 일부 공간은 호스트나 다른 사람과 함께 사용할 수 있습니다.',
    type: 'guest',
    image: './images/Host/door.png',
  },
  {
    id: 3,
    title: '다인실',
    message:
      '게스트가 개인 공간 없이 호스트나 다른 사람과 함께 쓰는 침실이나 공용 공간에서 숙박합니다.',
    type: 'public',
    image: './images/Host/share.png',
  },
];

export const HOST_INFO_DATA = [
  { id: 1, title: '게스트', cnt: 1 },
  { id: 3, title: '침실', cnt: 1 },
  { id: 2, title: '침대', cnt: 1 },
  { id: 4, title: '욕실', cnt: 1 },
];

export const HOST_LAST_MSG_DATA = [
  {
    id: 1,
    title: '세부 정보를 확인하고 숙소를 등록하세요.',
    message: '본인 인증이 필요한 경우 안내해드리겠습니다.',
    img: boardImg,
  },
  {
    id: 2,
    title: '달력 설정하기',
    message:
      '숙소 예약 가능일을 선택해주세요. 숙소는 등록 완료 후 24시간이 지나면 일반에 공개됩니다.',
    img: calendarImg,
  },
  {
    id: 3,
    title: '설정 변경하기',
    message:
      '숙소 이용규칙 설정, 환불 정책 선택, 게스트의 예약 방식 선택 등 필요한 작업을 하세요.',
    img: pencilImg,
  },
];
