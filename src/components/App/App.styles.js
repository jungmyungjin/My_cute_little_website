import { createGlobalStyle } from "styled-components";

const AppStyle = createGlobalStyle`
@font-face {
    font-family: 'CustomFont';
    src: url('/path/to/font.woff2') format('woff2');
    font-display: block;
  }
`;

export default AppStyle;
