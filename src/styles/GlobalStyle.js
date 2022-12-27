import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * { box-sizing: border-box }

  .react-datepicker{
    width: 100%;
    display: flex;
    justify-content: space-between;
    ;
    
    .react-datepicker__month-container{
      width: 100%;

    }
  }
`;

export default GlobalStyle;
