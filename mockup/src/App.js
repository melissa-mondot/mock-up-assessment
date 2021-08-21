import Theme, { GlobalStyle } from "./assets/Theme";

function App() {
  return (
    <div className="App">
      <Theme>
        <GlobalStyle />
        <h1>hello world</h1>
      </Theme>
    </div>
  );
}

export default App;
