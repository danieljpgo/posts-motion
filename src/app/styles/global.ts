import { createGlobalStyle } from 'styled-components';
import { Props } from './themes/types';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Roboto, Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        color: ${(props: Props) => props.theme.colors.text};
        background: ${(props: Props) => props.theme.colors.background};
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${(props: Props) => props.theme.colors.title};
        font-family: Ubuntu;
    }

    /* #root, body, html {
        height: 100%;
    }
    
    #root {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    } */
`;
