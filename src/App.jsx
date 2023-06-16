import { useState, memo,  useCallback } from "react";
import "./App.css";

// memo -> Higher Order Component ❤️
// useMemo
// useCallback

const Child = ({ handleClick }) => {
  console.log("Child re-render");
  return (
    <div>
      <button onClick={handleClick}>Increment from child</button>
    </div>
  );
};

// Cache : <h1>Child</h1>

const OptimizedChild = memo(Child);
// { id: 1 } -> xA123
// { id: 1 } -> ay123

 const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
    // count => 0
  }, []);

  // const handleClick = useMemo(() => {
  //   return () => {
  //     setCount((c) => c + 1);
  //   };
  // }, []);

  return (
    <main>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <OptimizedChild handleClick={handleClick} />
    </main>
  );
};

export default App;