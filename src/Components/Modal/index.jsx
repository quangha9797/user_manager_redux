import React, { Component } from 'react';
import { connect } from "react-redux";
import { addUser } from "../../Actions/users";
import { updateUser } from "../../Actions/users";
import _ from "lodash";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userName: "",
      email: "",
      userNumber: "",
      selectedUser: {},
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!_.isEmpty(nextProps.selectedUser) && !_.isEqual(nextProps.selectedUser, prevState.selectedUser)) {
      return {
        selectedUser: nextProps.selectedUser,
        userId: nextProps.selectedUser.userId,
        userName: nextProps.selectedUser.userName,
        email: nextProps.selectedUser.email,
        userNumber: nextProps.selectedUser.userNumber,
      }
    }
    return null;
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onAdd = () => {
    const newUser = this.state;
    this.props.addUser(newUser);
  }

  onUpdate = () => {
    const changeUser = {
      userId: this.state.userId,
      userName: this.state.userName,
      email: this.state.email,
      userNumber: this.state.userNumber,
    }
    this.props.updateUser(changeUser);
  }

  render() {
    return (
      <React.Fragment>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Thêm người dùng
        </button>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="userId">Mã ND:</label>
                    <input name="userId" type="text"
                      value={this.state.userId}
                      className="form-control" id="userId"
                      onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">Họ Tên ND:</label>
                    <input name="userName" type="text"
                      value={this.state.userName}
                      className="form-control" id="userName"
                      onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email ND:</label>
                    <input name="email" type="email"
                      value={this.state.email}
                      className="form-control" id="email"
                      onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userNumber">Số ĐT:</label>
                    <input name="userNumber" type="number"
                      value={this.state.userNumber}
                      className="form-control" id="userNumber"
                      onChange={this.onChange} />
                  </div>
                  <div className="modal-footer">
                    {
                      _.isEmpty(this.state.selectedUser) ?
                      <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onAdd}>Thêm</button>
                    : 
                    <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={this.onUpdate}>Sửa</button>
                    
                    }
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    {/* <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onAdd}>Thêm</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (newUser) => {
      dispatch(addUser(newUser));
    },
    updateUser: (changeUser) => {
      dispatch(updateUser(changeUser));
    },
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);