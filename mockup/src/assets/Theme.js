import { createGlobalStyle, ThemeProvider } from "styled-components";

export const theme = {
  color: {
    primary: "#AC5FD0",
    secondary: "#FF7218",
    bg: "#FFFFFF",
    text: "#000000",
  },
  maxWidth: "87.5rem",
};

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    margin: 0 auto;
    padding: 0;
    width: 100vw;
    @media(min-width: 1400px) {
      width: 1400px;
    }
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: calc((25 * 16) / 1000);
        line-height: 3rem;
    }
    h4 {
        font-size: 1.125rem;
        font-weight: 700;
        letter-spacing: calc((55.556 * 16) / 1000);
    }
}
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;
