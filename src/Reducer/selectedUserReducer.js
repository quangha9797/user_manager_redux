import * as Types from "../Constants/users";

const initialState = {};

const selectedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SELECT_USER:
      return action.payload;
    
    default:
      return state;
  }
}

export default selectedUserReducer;