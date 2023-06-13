import React, {useContext} from "react"
import CounterContext from "./context/CounterContext";

const Products = () => {
  const values = useContext(CounterContext)
  return (
    <div>
      <h1>Welcome to my Products page!</h1>
      <button onClick={() => values.setCounter(values.counter + 1)}>Click me!</button>
    </div>
  )
};

export default Products;
