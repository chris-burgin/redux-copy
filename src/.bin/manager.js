const manager = (defaultState, modifiers) => {
  let TEMP_STATE_STORAGE = defaultState;

  return {
    modify: (refresher, modifier, ...values) => {
      // modify the temporary storage
      TEMP_STATE_STORAGE = {
        ...TEMP_STATE_STORAGE,
        ...modifiers[modifier].reducer(
          TEMP_STATE_STORAGE,
          modifiers[modifier].action(...values)
        )
      };

      // call refresher
      refresher();
    },
    getState: () => TEMP_STATE_STORAGE
  };
};

export default manager;
