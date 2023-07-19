import { useState } from 'react';
import styles from '../styles/Hello.module.css'

export default function Hello() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div className={styles.counterPage}>
      <h1>Hello welcome to my Hello Page!</h1>
      <h1 className={styles.counter}>The count is {counter}</h1>
      <div className={styles.counterContainer}>        
        <button onClick={increment} className={styles.counterBtn}>Increment</button>
        <button onClick={decrement}className={styles.counterBtn}>Decrement</button>
      </div>
    </div>
  )
};