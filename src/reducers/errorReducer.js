export const errorReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return action.errorMsg;
    default:
      return state;
  }
};
