const initialState = {
  signedIn: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNED OUT":
      //   let temp1 = state;

      alert(state.signedIn);
      //   return state.signedIn;
      return false;
    case "SIGNED IN":
      //   let temp2 = state;
      alert(!state.signedIn);
      //   return !state.signedIn;
      return true;
    default:
      return state.signedIn;
  }
}

export default reducer;
