import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Celebration Countdown</h1>
      </header>
      <div className="content">
        <Counter date="September 22 2021 6:27 pm" />
      </div>
    </div>
  );
}

export default App;
