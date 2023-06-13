import React, {useContext} from "react"
import CounterContext from "./context/CounterContext";

const Abouts = () => {
  const values = useContext(CounterContext)
  return (
    <div>
      <h1>Welcome to my About page!</h1>
      <h2>The count is {values.counter}</h2>
    </div>
  )
};

export default Abouts;
