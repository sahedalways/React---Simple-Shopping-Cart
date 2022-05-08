export const reducer = (state, action) => {
  if (action.type === "REMOVE") {
    return {
      ...state,
      items: state.items.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }

  if (action.type === "CLEAR") {
    return { ...state, items: [] };
  }

  if (action.type === "INCREMENT") {
    const updatedCart = state.items.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });

    return { ...state, items: updatedCart };
  }

  if (action.type === "DECREMENT") {
    const updatedCart = state.items
      .map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      .filter((curElem) => curElem.quantity !== 0);
    return { ...state, items: updatedCart };
  }
  if (action.type === "GET_TOTAL") {
    let { totalItem } = state.items.reduce(
      (accum, currVal) => {
        let { quantity } = currVal;
        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
      }
    );
    return { ...state, totalItem };
  }

  return state;
};
