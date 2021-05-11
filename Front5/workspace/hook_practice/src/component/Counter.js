import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return<div className="Counter">
    <span className="counter">{count}</span> <br />
    <button onClick={() => setCount(count+1)}>+1</button> <button onClick={() => setCount(count-1)}>-1</button>
  </div>

}

export default Counter;