use serde::{Deserialize, Serialize};
use serde_wasm_bindgen::{from_value, to_value};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{
    Document, HtmlCanvasElement, WebGlBuffer, WebGlProgram, WebGlRenderingContext as GL,
    WebGlShader, Window,
};

/// Persistent data stored across sessions.
#[derive(Serialize, Deserialize, Default)]
pub struct PersistedState {
    pub high_score: u32,
}

/// Core game state. Heavy rendering is done in JavaScript/WebGL while
/// computational logic resides here.
#[wasm_bindgen]
pub struct Game {
    player_angle: f32,
    forward_speed: f32,
    base_speed: f32,
    score: u32,
    high_score: u32,
}

#[wasm_bindgen]
impl Game {
    /// Create a new game instance.
    #[wasm_bindgen(constructor)]
    pub fn new(base_speed: f32, high_score: u32) -> Game {
        Game {
            player_angle: -std::f32::consts::FRAC_PI_2,
            forward_speed: base_speed,
            base_speed,
            score: 0,
            high_score,
        }
    }

    /// Advance game logic. Returns `true` if a collision occurred.
    /// Collision detection for obstacles should be implemented in JS and the
    /// result passed back to Rust. Here we simply update the score and speed.
    pub fn update(&mut self, collided: bool) -> bool {
        if collided {
            if self.score > self.high_score {
                self.high_score = self.score;
            }
            return true;
        }
        self.score = self.score.saturating_add(1);
        false
    }

    /// Adjust the player's rotational position around the tunnel.
    pub fn rotate(&mut self, delta_angle: f32) {
        self.player_angle += delta_angle;
    }

    /// Adjust the player's forward speed.
    pub fn speed_adjust(&mut self, delta: f32) {
        let new_speed = self.forward_speed + delta;
        self.forward_speed = new_speed.max(0.0);
    }

    #[wasm_bindgen(getter)]
    pub fn player_angle(&self) -> f32 {
        self.player_angle
    }

    #[wasm_bindgen(getter)]
    pub fn forward_speed(&self) -> f32 {
        self.forward_speed
    }

    #[wasm_bindgen(getter)]
    pub fn score(&self) -> u32 {
        self.score
    }

    #[wasm_bindgen(getter)]
    pub fn high_score(&self) -> u32 {
        self.high_score
    }
}

/// Serialize persistent state to JSON for saving in localStorage.
#[wasm_bindgen]
pub fn serialize_state(state: &Game) -> JsValue {
    let persisted = PersistedState {
        high_score: state.high_score,
    };
    to_value(&persisted).unwrap()
}

/// Load persistent state from JSON.
#[wasm_bindgen]
pub fn deserialize_state(js_val: &JsValue) -> u32 {
    from_value(js_val.clone())
        .map(|s: PersistedState| s.high_score)
        .unwrap_or(0)
}

#[wasm_bindgen]
pub struct GameRenderer {
    game: Game,
    gl: GL,
    program: WebGlProgram,
    buffer: WebGlBuffer,
    rotation: f32,
}

#[wasm_bindgen]
impl GameRenderer {
    #[wasm_bindgen(constructor)]
    pub fn new(canvas_id: &str, base_speed: f32, high_score: u32) -> Result<GameRenderer, JsValue> {
        let window: Window = web_sys::window().ok_or("no window")?;
        let document: Document = window.document().ok_or("no document")?;
        let canvas = document
            .get_element_by_id(canvas_id)
            .ok_or("canvas not found")?;
        let canvas: HtmlCanvasElement = canvas.dyn_into()?;
        let gl: GL = canvas
            .get_context("webgl")?
            .ok_or("no webgl")?
            .dyn_into()?;

        let vert_shader = compile_shader(&gl, GL::VERTEX_SHADER, VERT_SRC)?;
        let frag_shader = compile_shader(&gl, GL::FRAGMENT_SHADER, FRAG_SRC)?;
        let program = link_program(&gl, &vert_shader, &frag_shader)?;
        gl.use_program(Some(&program));

        let vertices: [f32; 9] = [
            0.0, 0.5, 0.0,
            -0.5, -0.5, 0.0,
            0.5, -0.5, 0.0,
        ];
        let buffer = gl.create_buffer().ok_or("failed to create buffer")?;
        gl.bind_buffer(GL::ARRAY_BUFFER, Some(&buffer));
        unsafe {
            let vert_array = js_sys::Float32Array::view(&vertices);
            gl.buffer_data_with_array_buffer_view(GL::ARRAY_BUFFER, &vert_array, GL::STATIC_DRAW);
        }

        Ok(GameRenderer {
            game: Game::new(base_speed, high_score),
            gl,
            program,
            buffer,
            rotation: 0.0,
        })
    }

    pub fn update(&mut self) {
        self.game.update(false);
        self.rotation += 0.01;
        draw_triangle(&self.gl, &self.program, &self.buffer, self.rotation);
    }

    pub fn game_rotate(&mut self, delta: f32) {
        self.game.rotate(delta);
    }

    pub fn game_speed_adjust(&mut self, delta: f32) {
        self.game.speed_adjust(delta);
    }

    #[wasm_bindgen(getter)]
    pub fn score(&self) -> u32 { self.game.score() }
    #[wasm_bindgen(getter)]
    pub fn high_score(&self) -> u32 { self.game.high_score() }
}

const VERT_SRC: &str = "
attribute vec3 position;
uniform float angle;
void main() {
    float s = sin(angle);
    float c = cos(angle);
    gl_Position = vec4(
        position.x * c - position.y * s,
        position.x * s + position.y * c,
        position.z,
        1.0);
}";

const FRAG_SRC: &str = "
void main() {
    gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);
}";

fn compile_shader(gl: &GL, shader_type: u32, source: &str) -> Result<WebGlShader, JsValue> {
    let shader = gl.create_shader(shader_type).ok_or("unable to create shader")?;
    gl.shader_source(&shader, source);
    gl.compile_shader(&shader);
    if gl.get_shader_parameter(&shader, GL::COMPILE_STATUS).as_bool().unwrap_or(false) {
        Ok(shader)
    } else {
        Err(gl.get_shader_info_log(&shader).unwrap_or("unknown".to_string()).into())
    }
}

fn link_program(gl: &GL, vert_shader: &WebGlShader, frag_shader: &WebGlShader) -> Result<WebGlProgram, JsValue> {
    let program = gl.create_program().ok_or("unable to create program")?;
    gl.attach_shader(&program, vert_shader);
    gl.attach_shader(&program, frag_shader);
    gl.link_program(&program);
    if gl.get_program_parameter(&program, GL::LINK_STATUS).as_bool().unwrap_or(false) {
        Ok(program)
    } else {
        Err(gl.get_program_info_log(&program).unwrap_or("unknown".to_string()).into())
    }
}

fn draw_triangle(gl: &GL, program: &WebGlProgram, buffer: &WebGlBuffer, angle: f32) {
    gl.viewport(0, 0, gl.drawing_buffer_width(), gl.drawing_buffer_height());
    gl.clear_color(0.0, 0.0, 0.0, 1.0);
    gl.clear(GL::COLOR_BUFFER_BIT);

    gl.bind_buffer(GL::ARRAY_BUFFER, Some(buffer));
    let pos_attrib = gl.get_attrib_location(program, "position") as u32;
    gl.vertex_attrib_pointer_with_i32(pos_attrib, 3, GL::FLOAT, false, 0, 0);
    gl.enable_vertex_attrib_array(pos_attrib);

    if let Some(loc) = gl.get_uniform_location(program, "angle") {
        gl.uniform1f(Some(&loc), angle);
    }

    gl.draw_arrays(GL::TRIANGLES, 0, 3);
}
