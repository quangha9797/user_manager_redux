import { combineReducers } from "redux";
import userListReducer from "./userListReducer";
import selectedUserReducer from "./selectedUserReducer";

const rootReducer = combineReducers({
  //reducer con
  userList: userListReducer,
  selectedUser: selectedUserReducer,
});

export default rootReducer;