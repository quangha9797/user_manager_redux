import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteUser, selectUser } from "../../Actions/users";

class UserItem extends Component {

  onDelete = (userId) => {
    this.props.deleteUser(userId);
  }

  onSelectUser = (user) => {
    this.props.selectUser(user);
  }

  render() {
    const { index, user } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{user.userId}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.userNumber}</td>
        <td>
          <button className="btn btn-danger mr-2" onClick={() => { this.onDelete(user.userId) }}>Xoá</button>
          <button className="btn btn-warning"
            data-target="#myModal"
            data-toggle="modal"
            onClick={() => { this.onSelectUser(user) }}
          >Sửa</button>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (userId) => {
      dispatch(deleteUser(userId));
    },
    selectUser: (user) => {
      dispatch(selectUser(user));
    }
  }
}

export default connect(null, mapDispatchToProps)(UserItem);
