const modifiers = {
  INC: {
    action: count => ({ count }),
    reducer: (state, action) => ({ count: state.count + action.count })
  },
  DEC: {
    action: count => ({ count }),
    reducer: (state, action) => ({ count: state.count - action.count })
  }
};

const defaultState = {
  count: 0
};

export { defaultState, modifiers };
