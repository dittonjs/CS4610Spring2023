import { useState } from 'react';
import { SignUpPage } from './pages/SignUpPage';

export function App () {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

{/* <SignUpPage /> */}