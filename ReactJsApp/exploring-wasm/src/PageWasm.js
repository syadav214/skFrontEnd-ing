import React, { useState } from 'react';

const PageWasm = () => {
  const [firstVal, setFirstVal] = useState(0);
  const [secVal, setSecVal] = useState(0);
  const [result, setResult] = useState(0);

  const doAdd = async() => {
    const response = await fetch('wasm/mathUtils.wasm');
    const buffer = await response.arrayBuffer();
    const wasmModule = await WebAssembly.instantiate(buffer, {
      env: {
        abort: () => console.log('Abort!'),
      },
    });

    const addResult = wasmModule.instance.exports.add(firstVal, secVal);
    setResult(addResult);
  }

  return (
    <div>
      <input
        type='number'
        value={firstVal}
        onChange={(e) => {
          setFirstVal(e.target.value);
        }}
      ></input>
      <br/>
      <input
        type='number'
        value={secVal}
        onChange={(e) => {
          setSecVal(e.target.value);
        }}
      ></input>
      <br/>
      <button onClick={doAdd}>doAdd</button> 
      <br/>
      <span>Result: {result}</span>
    </div>
  );
};

export default PageWasm;
