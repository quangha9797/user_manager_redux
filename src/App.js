import React, { Component } from 'react';
import Modal from './Components/Modal';
import UserList from './Components/UserList';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">Quản Lý Người dùng</h1>
        <Modal />
        <UserList />
        <span>hihi App.js file</span>
      </div>
    )
  }
}


