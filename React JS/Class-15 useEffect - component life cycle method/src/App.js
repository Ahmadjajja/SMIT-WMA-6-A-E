import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  // useEffect(sideEffectFunction, dependency(Optional))
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => setCount(count + 1), 1000);

    return () => {
      clearInterval(timer);
      setCount(0);
    };
  }, [count]);

  // Three scenarios in which useEffect called are as follow:

  // 1 - when dependency does'nt include in useEffect
  //     then
  //     useEffect first time calls when you just rendered your component
  //     useEffect everytime calls whenever any state changed or website rendered
  // 2 - when dependency does include in useEffect with empty [] (array)
  //     then
  //     useEffect only calls first time when you just rendered your component
  // 3 - when dependency does include in useEffect with elements in array [state1, state2, .....] (array)
  //     then
  //     useEffect first time calls when you just rendered your component
  //     useEffect everytime calls whenever specified state (described in array as elements) changed or website rendered

  // Life cycle methods w.r.t useEffect
  // 1 - componentDidMount
  // 2 - componentDidUpdate
  // 3 - componentWillUnMount
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export default App;
