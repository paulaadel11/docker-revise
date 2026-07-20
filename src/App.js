import "./App.css";
import myLove from "./assets/mylove.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={myLove}
          alt="My Love"
          className="love-photo"
        />

        <h1>❤️ To My Love ❤️</h1>

        <p>
          Every moment with you is my favorite memory.
          <br />
          Thank you for filling my life with happiness and love.
        </p>

        <h2>I Love You Forever ❤️</h2>

        <p className="signature">
          With all my love,
          <br />
          Paula 💖
        </p>
      </header>
    </div>
  );
}

export default App;
