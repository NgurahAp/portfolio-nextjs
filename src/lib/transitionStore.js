// Plain JS external store - tidak pakai Context supaya tidak trigger re-render berlebihan

let listeners = [];
let state = {
  // "idle" | "entering" | "holding" | "exiting"
  phase: "idle",
  title: "",
  pendingHref: null,
};

export const transitionStore = {
  getState: () => state,

  setState: (partial) => {
    state = { ...state, ...partial };
    listeners.forEach((l) => l({ ...state }));
  },

  subscribe: (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
};
