const initialState = {
  signedIn: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNED OUT":
      return { signedIn: false };
    case "SIGNED IN":
      return { signedIn: true };
    default:
      return state;
  }
}

export default reducer;
