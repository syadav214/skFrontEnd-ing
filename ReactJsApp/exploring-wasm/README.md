# exploring-wasm

* Install @assemblyscript/loader & assemblyscript
* Put typescript files in a folder, so that we can create wasm file from it
* Compile by this command

```bash
$ asc tsFiles/hello-world.ts -b public/wasm/hello-world.wasm
```
* to load wasm file, you can use fetch. `const response = await fetch('wasm/hello-world.wasm')`

* To compile CPP file, you need to install emsdk
```bash
$ git clone https://github.com/emscripten-core/emsdk.git
$ cd emsdk
$ emsdk install latest
$ emsdk activate latest
$ source ./emsdk_env.sh
```
* Then you can compile without main method
`emcc cppFiles/mathUtils.cpp -s STANDALONE_WASM -o public/wasm/mathUtilsCpp.wasm --no-entry`

