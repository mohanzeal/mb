import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {usersHttpClient, IUser} from '@mb/http-client';

type State = {
  users: IUser[]
}
type Props = {}
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {users: []}
  }
  async componentDidMount() {
    const users: IUser[] = await usersHttpClient.getUsers() || [];
    this.setState({users})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div>
            <h3>Users data from server</h3>
          {this.state.users.map((user: IUser, index: number) => (
            <div key={index}>{user.id} - {user.name}</div>
          ))}
          </div>
        </header>
      </div>
    );
  }
}