import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    :root {
    --color-1: #F5F7FF;
    --color-2: #cc142c ;
    --color-3: #A2A6B0;
    --color-4: #CACDD8;
  
  }

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    background: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    color: black;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;
