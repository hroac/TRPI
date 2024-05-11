let state = {}

export function update(key, value) {
    state[key] = value
}

export function set(state) {
    state = state;
}

export function get() {
    return state;
}