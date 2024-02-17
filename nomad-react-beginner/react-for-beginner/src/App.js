import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState("doing...");

  const onClick = () => setCounter((prev) => prev + 1);

  console.log("i run all the time");

  useEffect(() => {
    console.log("CALL THE API...");
    setTimeout(() => {
      setResult("done!");
      console.log("DONE");
    }, 2000);
  }, []);

  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <h3>{result}</h3>
    </div>
  );
}

export default App;
