# SpeedX WASM

This crate contains a Rust implementation of the SpeedX 3D tunnel game.
Both game logic and rendering now execute in WebAssembly for improved
performance. JavaScript is only used to bootstrap the module and handle basic
input events.

## Building

```
wasm-pack build --release --target web speedx-wasm
```

This produces `speedx_wasm.js` and `speedx_wasm_bg.wasm` in the `pkg` folder.
Copy these files into `public/` so that `public/3d.html` can load them.

## Overview

`src/lib.rs` exports the `GameRenderer` type which sets up a WebGL context and
handles the render loop. Helper methods like `game_rotate` and
`game_speed_adjust` allow JavaScript to send user input while heavy lifting is
done in Rust. Persistent high scores can be saved by serialising the state to
JSON and storing it in `localStorage`.
