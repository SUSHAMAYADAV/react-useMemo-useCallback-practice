import { useCallback, useState } from "react";
import ChildA from "./Components/ChildA";
import Usememohook from "./Components/Usememohook";
function App() {
  const [count, setCount] = useState(0)
  const [remove, setRemove] = useState(10)
  const Learning = useCallback(() => {
    console.log("----->")
  }, [remove])

  return (
    <div>
      <Usememohook />
      {/*  <ChildA Learning={Learning} remove={remove} /> 
      <h1>useCallback Hook</h1>
      <h3>count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <button onClick={() => setRemove(remove - 1)}>Remove</button>*/}
    </div>
  );
}

export default App;
