import logo from "./logo.svg";
import "./App.css";

function App() {
  const { REACT_APP_API_KEY, REACT_APP_TEST } = process.env;

  console.log(`REACT_APP_TEST`, REACT_APP_TEST);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit{" "}
          <code>
            {REACT_APP_API_KEY.length === 8 ? "src/App.js" : "github"}{" "}
          </code>{" "}
          and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
