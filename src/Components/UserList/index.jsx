import React, { Component } from 'react';
import { connect } from "react-redux";
import UserItem from '../UserItem';

class UserList extends Component {
  render() {
    //console.log(this.props.UserList)
    const elmUser = this.props.userList.map((user, index) => {
      return <UserItem index={index} key={user.userId} user={user} />
    });
    return (
      <table className="table mt-5">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã ND</th>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Số ĐT</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {elmUser}
        </tbody>
      </table>
    )
  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    userList: state.userList
  }
}
// mapDispatchToProps

export default connect(mapStateToProps)(UserList);