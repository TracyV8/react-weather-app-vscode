import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1> Weather Application Using React in VS Code </h1>
      <Weather />
      <h6>
        This project is part of my SheCodes React Assessment and is {""}
        <a
          href="https://github.com/TracyV8/react-weather-app-vscode"
          target="_blank"
          rel="noreferrer"
        >
          {""}open sourced on GitHub
        </a>
      </h6>
    </div>
  );
}

export default App;
