import React, { useState } from "react"
import Count from "./Count";
import Inbetween from "./Inbetween";
import CounterContext from "./CounterContext";

const Parent = () => {
  const [counter, setCounter] = useState(0);
  
  const contextObj = {
    counter,
    setCounter
  }

  return (
    <div>
      <h1>Parent</h1>
      <CounterContext.Provider value={contextObj}>
        {/* <Count counter={counter} />
        <Inbetween setCounter={setCounter} counter={counter} /> */}
        <Count />
        <Inbetween />
      </CounterContext.Provider>
    </div>
  )
};

export default Parent;
