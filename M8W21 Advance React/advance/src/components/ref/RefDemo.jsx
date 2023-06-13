import React, { useState, useRef } from "react"

const RefDemo = () => {
  // const [value, setValue] = useState("");
  const [word, setWord] = useState("");
  const inputRef = useRef();
  const onButtonClick = () => {
    console.log(inputRef.current.value)
    setWord(inputRef.current.value)
  }
  return (
    <div>
      <h1 className="">Ref Demo page</h1>
      <h2>The Set Word is {word}</h2>
      <input ref={inputRef} type="text" name="" id="" />
      <button onClick={onButtonClick}>Click me</button>
    </div>
  )
};

export default RefDemo;
