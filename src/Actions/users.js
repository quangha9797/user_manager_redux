import * as Types from "../Constants/users";

// Action bản chất của nó là 1 object
export const addUser = (newUser) => {
  return {
    type: Types.ADD_USER, // "ADD_USER"
    payload: newUser
  }
}

export const deleteUser = (userId) => {
  return {
    type: Types.DELETE_USER,
    payload: userId,
  }
}

export const selectUser = (user) => {
  return {
    type: Types.SELECT_USER,
    payload: user,
  }
}
export const updateUser = (user) => {
  return {
    type: Types.UPDATE_USER,
    payload: user,
  }
}