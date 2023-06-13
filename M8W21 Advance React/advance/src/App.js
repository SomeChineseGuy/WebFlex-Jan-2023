import logo from './logo.svg';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Abouts from './components/Abouts'
import Products from './components/Products';
import Product from './components/Product';
import StyledComponent from './components/StyledComponents';
import Count from './components/context/Count';
import Parent from './components/context/Parent';
import { useState } from 'react';
import CounterContext from './components/context/CounterContext';
import RefDemo from './components/ref/RefDemo';
function App() {
  const [counter, setCounter] = useState(0);
  
  const contextObj = {
    counter,
    setCounter
  }

  return (
    <CounterContext.Provider value={contextObj}>
    <div className="App">
      <h1>Welcome to my App!</h1>
      <BrowserRouter>
        <Link to="/about" >About</Link>
        <Link to="/products" >Products</Link>
        <Routes>
          <Route path="*" element={<h1>This is an error</h1>} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/products/:id" element={<Product />}/>
          <Route path="/products" element={<Products />} />
          <Route path="/styled" element={<StyledComponent  />} />
          <Route path="/count" element={<Parent  />} />
          <Route path="/ref" element={<RefDemo  />} />
        </Routes>
      </BrowserRouter>
    </div>
    </CounterContext.Provider>
  );
}

export default App;


// req.params.id
// app.get('/product/:id' )
// app.get('/product/new' )

