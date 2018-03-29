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

  handleFormSubmit(evt) {
    evt.preventDefault()
    console.log(this.refs.name.value)

  }

  render() {
    const {signups} = this.state
    return (
      <div className="App">
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input ref="name" type="text" placeholder="Name"/>
            <input ref="email" type="text" placeholder="Email"/>
            <button>Sign Up</button>
          </form>
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
