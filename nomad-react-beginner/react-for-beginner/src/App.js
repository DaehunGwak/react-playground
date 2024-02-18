import styles from "./App.module.css";
import {useState, useEffect} from "react";

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
  }, []);
  return (<h1>Hello</h1>);
}

function App() {
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState("doing...");
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onShowingClick = () => setShowing((prev) => !prev);

  console.log("i run all the time");

  useEffect(() => {
    console.log("i run only once");
    setTimeout(() => {
      setResult("done!");
      console.log("i run only once, timer");
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    console.log("i run when 'keyword' & 'counter' changes");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <h3>{result}</h3>
      {showing ? <Hello/> : null}
      <button onClick={onShowingClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
