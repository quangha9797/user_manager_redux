//1 reducer là 1 hàm có 2 tham số (state khỏi tạo, action) ==> bắt buộc phải trả 1 state
import * as Types from "../Constants/users";

const initialState = []; //userList

const userListReducer = (state = initialState, action) => {
  var newState = [];
  //action: object, có ít nhất 1 thuộc tính : type
  switch (action.type) {
    case Types.ADD_USER:
      let newUserList = [...state, action.payload];
      return newUserList;
    case Types.DELETE_USER:
      let userListAfterDeleting = state.filter((user) => user.userId !== action.payload);
      return userListAfterDeleting;


    //faillllllll
    case Types.UPDATE_USER:
      for(let index in state){
        if(state[index].userId === action.payload.userId){
          state[index] = action.payload;
          //newState = state;
           break;
        }
      }
      //console.log(newState);
      return [ ...state];
      
    default:
      return state;
      
  }
}

export default userListReducer;