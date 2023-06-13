import React, { useContext } from "react";
import CounterContext from "./CounterContext";


const Button = () => {
  const values = useContext(CounterContext)
  return (
    <div>
      {/* <button onClick={() => props.setCounter(props.counter + 1)}>Click me</button> */}
      <button onClick={() => values.setCounter(values.counter + 1)}>Click me</button>
    </div>
  )
};

export default Button;
