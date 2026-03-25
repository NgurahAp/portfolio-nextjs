// Plain JS external store — tidak pakai Context supaya tidak trigger re-render berlebihan

let listeners = [];
let state = { isActive: false, title: "" };

export const transitionStore = {
  getState: () => state,

  setState: (partial) => {
    state = { ...state, ...partial };
    listeners.forEach((l) => l(state));
  },

  subscribe: (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
};
