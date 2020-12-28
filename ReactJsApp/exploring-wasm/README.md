# exploring-wasm

* Install @assemblyscript/loader & assemblyscript
* Put typescript files in a folder, so that we can create wasm file from it
* Compile by this command

```bash
$ asc tsFiles/hello-world.ts -b public/wasm/hello-world.wasm
```
* to load wasm file, you can use fetch. `const response = await fetch('wasm/hello-world.wasm')`