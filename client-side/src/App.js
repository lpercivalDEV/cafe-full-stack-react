import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {users: []}

 componentDidMount() {
    fetch('/api/order',{
     headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
     .then(res => res.json())
     .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>orders</h1>
        {this.state.users.map(user =>
          <div key={user.name}>{user.order}</div>
        )}
      </div>
    );
  }
}

export default App;
