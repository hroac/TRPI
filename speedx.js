import init, { GameRenderer, deserialize_state, serialize_state } from "./speedx_wasm.js";

let renderer;
let ready = false;

async function startGame() {
  await init();
  const stored = localStorage.getItem("speedx_state");
  const high = stored ? deserialize_state(JSON.parse(stored)) : 0;
  renderer = new GameRenderer("gameCanvas", 40.0, high);
  ready = true;
  requestAnimationFrame(gameLoop);
}

function gameLoop() {
  if (!ready) return;
  renderer.update();
  document.getElementById("score").textContent = `Score: ${renderer.score}`;
  document.getElementById("highScore").textContent = `High Score: ${renderer.high_score}`;
  requestAnimationFrame(gameLoop);
}

window.startGame = startGame;
window.rotateLeft = () => renderer && renderer.game_rotate(-0.05);
window.rotateRight = () => renderer && renderer.game_rotate(0.05);
window.speedUp = () => renderer && renderer.game_speed_adjust(1.0);
window.slowDown = () => renderer && renderer.game_speed_adjust(-1.0);
window.restartGame = () => window.location.reload();
