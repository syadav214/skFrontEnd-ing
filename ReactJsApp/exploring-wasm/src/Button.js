import React, { useState, useEffect } from 'react';

export default function Button() {
  const [buttonVal, setButtonVal] = useState(0);
  const [data, setData] = useState([]);
  // If we wanted to store two different values in state, we would call useState() twice.

  const handleClick = () => setButtonVal(buttonVal + 1);

  const loadWASM = async () => {
    const response = await fetch('wasm/hello-world.wasm');
    console.log('response', response);
    const buffer = await response.arrayBuffer();
    const wasmModule = await WebAssembly.instantiate(buffer, {
      env: {
        abort: () => console.log('Abort!'),
      },
    });
    console.log('wasmModule', wasmModule);
    // Call the Add function export from wasm, save the result
    const addResult = wasmModule.instance.exports.add(24, 10);

    setButtonVal(addResult);
  };

  // you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setData(data));
    loadWASM();
  }, []);

  return (
    <React.Fragment>
      <button onClick={handleClick}>{buttonVal.toString()}</button>
      <ol>{data && data.map((el) => <li key={el.id}>{el.title}</li>)}</ol>
    </React.Fragment>
  );
}
