import axios from 'axios';

export default function Goodbye () { 

  const handleClick = () => {
    axios.post('http://localhost:3000/api/urls')
      .then(res => {
        console.log(res);
      })
  }


  return (
    <div>
      <h1>This is the Goodbye page!</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

// app.post("/api/urls", (req, res) => {
// })
