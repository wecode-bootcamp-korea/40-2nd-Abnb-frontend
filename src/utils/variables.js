import { css } from 'styled-components';

export const flexBox = (jf = 'center', ai = 'center') => {
  return css`
    display: flex;
    align-items: ${ai};
    justify-content: ${jf};
  `;
};

export const posCenter = (position = 'absolute') => {
  if (position === 'absolute' || position === 'fixed')
    return css`
      position: ${position};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;
  return;
};

export const posCenterY = (position = 'absolute') => {
  if (position === 'absolute' || position === 'fixed')
    return css`
      position: ${position};
      top: 50%;
      transform: translateY(-50%);
    `;
  return;
};
