import React, { useEffect, useState } from 'react';
import { WASI } from '@wasmer/wasi';

export default function Page() {
  const [buttonVal, setButtonVal] = useState(0);
  const [tsVal, setTypeScriptWASMVal] = useState(0);
  const [cppVal, setCppWASMVal] = useState(0);

  const handleClick = () => setButtonVal(buttonVal + 1);

  const loadTypeScriptWASM = async () => {
    console.log('---------loadTypeScriptWASM()---------------');
    const response = await fetch('wasm/mathUtils.wasm');
    const buffer = await response.arrayBuffer();
    const wasmModule = await WebAssembly.instantiate(buffer, {
      env: {
        abort: () => console.log('Abort!'),
      },
    });

    const addResult = wasmModule.instance.exports.add(24, 10);
    //console.log('addResult', addResult);
    setTypeScriptWASMVal(addResult);
  };

  const loadCppWASM = async () => {
    console.log('-------loadCppWASM()-----------');
    const response = await fetch('wasm/mathUtilsCpp.wasm');
    const buffer = await response.arrayBuffer();
    const wasmModule = await WebAssembly.compile(buffer);
    const instance = await new WebAssembly.Instance(wasmModule);

    const reverse = instance.exports._Z13reversenumberi(1439898);
    //console.log('reverse', reverse);
    setCppWASMVal(reverse);
  };

  // eslint-disable-next-line
  const loadCppWASMWithMain = async () => {
    console.log('---------loadCppWASMWithMain()---------------');
    const wasi = new WASI({
      env: {
        abort: () => console.log('Abort!'),
      },
    });
    const response = await fetch('wasm/mathUtilsCpp.wasm');
    const buffer = await response.arrayBuffer();
    const wasmModule = await WebAssembly.instantiate(buffer, {
      wasi_snapshot_preview1: wasi.wasiImport,
    });

    const reverse = wasmModule.instance.exports._Z13reversenumberi(1439898);
    console.log('reverse', reverse);
    setButtonVal(reverse);
  };

  useEffect(() => {
    loadTypeScriptWASM();
    loadCppWASM();
  }, []);

  return (
    <React.Fragment>
      <table border='1'>
        <tbody>
          <tr>
            <td>loadTypeScriptWASM</td>
            <td>{tsVal}</td>
          </tr>
          <tr>
            <td>loadCppWASM</td>
            <td>{cppVal}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <button onClick={handleClick}>{buttonVal}</button>
    </React.Fragment>
  );
}
