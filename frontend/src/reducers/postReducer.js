export const initialPostState = [];

export const reducer = (state, action) => {
  if (action.type === "ADD_POST") {
    return [...state, action.payload];
  }

  return state;
};
