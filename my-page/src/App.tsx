import logo from "./logo.svg";
import "./App.css";

const user = {
  firstName: "Tymur",
  shortInfo: "I am a student on the Fullstack course",
  data: "My email, My phone number, My social",
};

const App = () => (
  <div className="App">
    <header>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <div>
      <h3>Hello! My name is {user.firstName}</h3>
      <p>
        <span className="Span">About me:</span> {user.shortInfo}
      </p>
      <p>
        <span className="Span">My info:</span> {user.data}
      </p>
    </div>
  </div>
);

export default App;
