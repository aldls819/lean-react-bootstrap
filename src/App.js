import logo from "./logo.svg";
import "./App.css";
import Accordion from "react-bootstrap/Accordion";

const data = [
  {
    id: 1,
    name: "텍스트1",
    content: "안녕하시렵니까?",
  },
  {
    id: 2,
    name: "텍스트2",
    content: "안녕하시렵니까?",
  },
  {
    id: 3,
    name: "텍스트3",
    content: "안녕하시렵니까?",
  },
];

function App() {
  return (
    <div className="App">
      {data.map((e, i) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={i}>
            <Accordion.Header>{e.name}</Accordion.Header>
            <Accordion.Body>{e.content}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
