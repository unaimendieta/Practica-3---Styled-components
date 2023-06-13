import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
body {
	font-family: 'Space Grotesk', sans-serif;
	
    height: 100vh;
    width: 100vw;
    background-color: "#ffffff";
    
}
`;

export {GlobalStyles};