import {useState} from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  // setCount(true); // type error

  return (
    <div>
      {count}
      <button onClick={(_) => setCount(count + 1)}>
        up
      </button>
    </div>
  );
}

export default Counter;
