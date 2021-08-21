import { createGlobalStyle, ThemeProvider } from "styled-components";

export const theme = {
  color: {
    primary: "#AC5FD0",
    secondary: "#FF7218",
    bg: "#FFFFFF",
    text: "#000000",
  },
  maxWidth: 1440,
};

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    h1 {
        /* color: TODO: set dynamically */
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
