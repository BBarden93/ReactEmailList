import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    signups: [
      {name: "A", email: "a@gmail.com"},
      {name: "B", email: "b@gmail.com"},
      {name: "C", email: "c@gmail.com"}
    ]
  }

  render() {
    const {signups} = this.state
    return (
      <div className="App">
        <ul>
          {signups.map((person, index) => {
            return (
              <li key={index}>{person.name}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
