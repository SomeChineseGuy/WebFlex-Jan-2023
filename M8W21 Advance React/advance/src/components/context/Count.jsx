import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Count = (props) => {
  const values = useContext(CounterContext)
  console.log(values);
  return (
    <div>
      {/* <h2>The count is {props.counter}</h2> */}
      <h2>The count is {values.counter}</h2>
    </div>
  )
};

export default Count;
