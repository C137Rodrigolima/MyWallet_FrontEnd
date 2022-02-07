import { createGlobalStyle, } from "styled-components";

const GlobalStyle = createGlobalStyle`
    box-sizing: border-box;

body, html {
  width: 100%;
  height: 100%;

  font-family: 'Raleway', sans-serif;
}

.root {
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyle;